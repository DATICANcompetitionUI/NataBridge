interface CreatePredictionInput {
    assessmentId: string;
    prediction: number;
    riskLevel: string;

    lowProbability: number | null;
    midProbability: number | null;
    highProbability: number | null;
}

const createPrediction = async (
    prediction: CreatePredictionInput
) => {
    const result = await pool.query(
        `
        INSERT INTO prediction_results (
            assessment_id,
            prediction,
            risk_level,
            low_probability,
            mid_probability,
            high_probability
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `,
        [
            prediction.assessmentId,
            prediction.prediction,
            prediction.riskLevel,
            prediction.lowProbability,
            prediction.midProbability,
            prediction.highProbability
        ]
    );

    return result.rows[0];
};

export {
    createPrediction
};