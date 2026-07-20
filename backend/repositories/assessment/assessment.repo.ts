import { PoolClient } from "pg";
import { AssessmentRepoInput } from "../../models/assessment/repo/assessment.repo";

const createAssessment = async (
    client: PoolClient,
    assessment: AssessmentRepoInput
) => {
    const result = await client.query(
        `
        INSERT INTO assessments (
            patient_id,
            age,
            systolic_bp,
            diastolic_bp,
            blood_sugar,
            body_temperature_celsius,
            heart_rate,
            gestational_age,
            first_pregnancy,
            previous_complications
        )
        VALUES (
            $1, $2, $3, $4, $5,
            $6, $7, $8, $9, $10
        )
        RETURNING *
        `,
        [
            assessment.patientId,
            assessment.age,
            assessment.systolicBP,
            assessment.diastolicBP,
            assessment.bloodSugar,
            assessment.bodyTemperatureCelsius,
            assessment.heartRate,
            assessment.gestationalAge,
            assessment.firstPregnancy,
            assessment.previousComplications
        ]
    );

    return result.rows[0];
};

export {
    createAssessment
};