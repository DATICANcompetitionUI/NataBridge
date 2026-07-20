import { uuidv7 } from "uuidv7";
import { FastifyInstance } from "fastify";
import { InitAssessmentRequest } from "../../models/assessment/dto/assessment.dto";
import { AiFeatures } from "../../models/assessment/assessmentFeatures.model";
import { AiApiResponse } from "../../models/ai/aiApiResponse.model";
import { PersonalInformation, SecondaryInformation } from "../../models/assessment/assessmentFeatures.model";

/**
 * 
 * @param assessmentRequestBody 
 * @returns an array of objects where object at index:
 *  0 - personal information
 *  1 - secondary information
 *  2 - ai essential features
 */
const separateFeatures = (assessmentRequestBody: InitAssessmentRequest) => {
     const { dob, email, firstPregnancy, firstname, lastname, middlename, gestationalAge, phone, previousComplications, ...aiEssentialFeatures } = assessmentRequestBody;

     return {
          personalInformation: { lastname, firstname, middlename, email, phone, dob },
          secondaryInformation: { gestationalAge, firstPregnancy, previousComplications },
          aiFeatures: aiEssentialFeatures
     };
};

const convertCelsiusTempToFahrenheit = (tempInCelsius: number) => {
     return (tempInCelsius * 1.8) + 32;
}

const getAiPrediction = async (aiFeatures: AiFeatures) => {
     const tempInFahrenheit =
          convertCelsiusTempToFahrenheit(aiFeatures.bodyTemp);

     const response = await fetch(
          `${process.env.AI_ORIGIN}/predict`,
          {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify({
                    age: aiFeatures.age,
                    systolicBP: aiFeatures.systolicBP,
                    diastolicBP: aiFeatures.diastolicBP,
                    bs: aiFeatures.bloodSugar,
                    bodyTemp: tempInFahrenheit,
                    heartRate: aiFeatures.heartRate
               })
          }
     );

     if (!response.ok) {
          throw new Error(
               `AI Service failed with status ${response.status}`
          );
     }

     return await response.json() as AiApiResponse;
};

const saveAssessment = async (
     server: FastifyInstance,
     personalInformation: PersonalInformation,
     secondaryInformation: SecondaryInformation,
     aiFeatures: AiFeatures,
     prediction: AiApiResponse
) => {
     const client = await server.pg.connect();
     const uid = uuidv7();

     try {
          await client.query("BEGIN");

          const patient = await client.query(`
               INSERT INTO patients(id, firstname, middlename, lastname, dob, email, phone) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id
               `, [
                    uid,
                    personalInformation.firstname,
                    personalInformation.middlename,
                    personalInformation.lastname,
                    personalInformation.dob,
                    personalInformation.email,
                    personalInformation.phone
               ]);

          const patientId = patient.rows[0].id;

          const assessmentResult = await client.query(
               `
            INSERT INTO assessments (
                patient_id,

                gestational_age,
                first_pregnancy,
                previous_complications,

                age,
                systolic_bp,
                diastolic_bp,
                blood_sugar,
                body_temperature_celsius,
                heart_rate
            )
            VALUES (
                $1,
                $2, $3, $4, $5, $6, $7,
                $8, $9, $10
            )
            RETURNING id
            `,
               [
                    patientId,
               
                    secondaryInformation.gestationalAge,
                    secondaryInformation.firstPregnancy,
                    secondaryInformation.previousComplications,

                    aiFeatures.age,
                    aiFeatures.systolicBP,
                    aiFeatures.diastolicBP,
                    aiFeatures.bloodSugar,
                    aiFeatures.bodyTemp,
                    aiFeatures.heartRate
               ]
          );

          const assessmentId =
               assessmentResult.rows[0].id;


          const predictionResult = await client.query(
               `
            INSERT INTO prediction_results (
                assessment_id,
                prediction,
                confidence,
                low_risk_probability,
                mid_risk_probability,
                high_risk_probability,
                model_version
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
            `,
               [
                    assessmentId,
                    prediction.prediction,
                    prediction.confidence,
                    prediction.probabilities["Low Risk"],
                    prediction.probabilities["Mid Risk"],
                    prediction.probabilities["High Risk"],
                    prediction.modelVersion
               ]
          );

          const predictionId =
               predictionResult.rows[0].id;


          for (const factor of prediction.topFactors) {
               await client.query(
                    `
                INSERT INTO prediction_factors (
                    prediction_result_id,
                    feature,
                    impact
                )
                VALUES ($1, $2, $3)
                `, [predictionId, factor.feature, factor.impact]
               );
          }

          await client.query("COMMIT")
          return {
               assessmentId,
               predictionId
          }
     } catch (error) {
          await client.query("ROLLBACK");
          throw error;
     } finally {
          client.release();
     }
};

const processAssessment = async (
     server: FastifyInstance,
     assessmentRequest: InitAssessmentRequest,
     userId?: string
) => {
     const {
          personalInformation,
          secondaryInformation,
          aiFeatures
     } = separateFeatures(assessmentRequest);

     const prediction = await getAiPrediction(aiFeatures);

     let persistenceResult;
     if (userId) {
          persistenceResult = await saveAssessment(
               server,
               personalInformation,
               secondaryInformation,
               aiFeatures,
               prediction
          );
     }

     return {
          prediction,
          ...(persistenceResult ?? {})
     };
}

export {
     processAssessment
}