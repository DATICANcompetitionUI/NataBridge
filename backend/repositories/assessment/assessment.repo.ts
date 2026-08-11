import { PoolClient } from "pg";
import { AssessmentRepoInput } from "../../models/assessment/repo/assessment.repo";

const createAssessment = async (
    client: PoolClient,
    assessment: AssessmentRepoInput
) => {
    const result = await client.query(
        `
        INSERT INTO assessments (
            id,
            patient_id,
            prediction_run_id,
            created_by_user_id,
            gestational_age,
            first_pregnancy,
            previous_complications
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
        `,
        [
            assessment.id,
            assessment.patientId,
            assessment.predictionRunId,
            assessment.createdByUserId,
            assessment.gestationalAge,
            assessment.firstPregnancy,
            assessment.previousComplications
        ]
    );

    return result.rows[0] as { id: string };
};

export {
    createAssessment
};
