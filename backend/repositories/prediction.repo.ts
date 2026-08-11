import type { PoolClient } from "pg";
import type {
     CreatePredictionResultInput,
     CreatePredictionRunInput
} from "../models/prediction/repo/prediction.repo";

const createPredictionRun = async (
     client: PoolClient,
     predictionRun: CreatePredictionRunInput
) => {
     const result = await client.query(
          `
          INSERT INTO prediction_runs (
               id,
               source,
               status,
               created_by_user_id,
               request_id,
               age,
               systolic_bp,
               diastolic_bp,
               blood_sugar,
               body_temperature_celsius,
               heart_rate
          )
          VALUES ($1, $2, 'pending', $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING id
          `,
          [
               predictionRun.id,
               predictionRun.source,
               predictionRun.createdByUserId,
               predictionRun.requestId,
               predictionRun.age,
               predictionRun.systolicBP,
               predictionRun.diastolicBP,
               predictionRun.bloodSugar,
               predictionRun.bodyTemp,
               predictionRun.heartRate
          ]
     );

     return result.rows[0] as { id: string };
};

const createPredictionResult = async (
     client: PoolClient,
     resultInput: CreatePredictionResultInput
) => {
     const { prediction } = resultInput;
     const result = await client.query(
          `
          INSERT INTO prediction_results (
               id,
               prediction_run_id,
               prediction,
               confidence,
               low_risk_probability,
               mid_risk_probability,
               high_risk_probability,
               model_version,
               response_payload
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb)
          RETURNING id
          `,
          [
               resultInput.id,
               resultInput.predictionRunId,
               prediction.risk,
               prediction.confidence,
               prediction.probabilities["Low Risk"],
               prediction.probabilities["Mid Risk"],
               prediction.probabilities["High Risk"],
               prediction.modelVersion,
               JSON.stringify(prediction)
          ]
     );

     return result.rows[0] as { id: string };
};

const createPredictionFactors = async (
     client: PoolClient,
     predictionResultId: string,
     factors: Array<{ id: string; feature: string; impact: number }>
) => {
     if (factors.length === 0) return;

     await client.query(
          `
          INSERT INTO prediction_factors (
               id,
               prediction_result_id,
               feature,
               impact
          )
          SELECT factor.id, $1, factor.feature, factor.impact
          FROM UNNEST(
               $2::varchar[],
               $3::varchar[],
               $4::numeric[]
          ) AS factor(id, feature, impact)
          `,
          [
               predictionResultId,
               factors.map((factor) => factor.id),
               factors.map((factor) => factor.feature),
               factors.map((factor) => factor.impact)
          ]
     );
};

const completePredictionRun = async (
     client: PoolClient,
     predictionRunId: string
) => {
     const result = await client.query(
          `
          UPDATE prediction_runs
          SET status = 'completed', completed_at = NOW()
          WHERE id = $1 AND status = 'pending'
          RETURNING id
          `,
          [predictionRunId]
     );

     if (result.rowCount !== 1) {
          throw new Error(`Prediction run ${predictionRunId} is not pending.`);
     }
};

const failPredictionRun = async (
     client: PoolClient,
     predictionRunId: string,
     failureCode: string
) => {
     await client.query(
          `
          UPDATE prediction_runs
          SET
               status = 'failed',
               failure_code = $2,
               failed_at = NOW()
          WHERE id = $1 AND status = 'pending'
          `,
          [predictionRunId, failureCode]
     );
};

export {
     completePredictionRun,
     createPredictionFactors,
     createPredictionResult,
     createPredictionRun,
     failPredictionRun
};
