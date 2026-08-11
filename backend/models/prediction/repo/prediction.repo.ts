import type { AiApiResponse } from "../../ai/aiApiResponse.model";
import type { PredictionRequest } from "../dto/prediction.dto";

type PredictionRunSource = "standalone" | "patient_assessment";

type CreatePredictionRunInput = PredictionRequest & {
     id: string;
     source: PredictionRunSource;
     createdByUserId: string | null;
     requestId: string;
};

type CreatePredictionResultInput = {
     id: string;
     predictionRunId: string;
     prediction: AiApiResponse;
};

export type {
     CreatePredictionResultInput,
     CreatePredictionRunInput,
     PredictionRunSource
};
