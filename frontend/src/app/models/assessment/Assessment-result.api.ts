interface Prediction {
  confidence: number;
  modelVersion: string;
  risk: string;
  probabilities: {
    'Low Risk': number;
    'Mid Risk': number;
    'High Risk': number;
  };
  topFactors: { feature: string; impact: number }[];
  recommendations: {
    feature: string;
    patientValue: number;
    condition: string;
    actions: string[];
    counselling: string[];
  }[];
}

interface PredictionResultApi {
  predictionRunId: string;
  predictionResultId: string;
  prediction: Prediction;
}

interface PatientAssessmentResultApi extends PredictionResultApi {
  assessmentId: string;
  patientId: string;
}

type AssessmentResultApi = PredictionResultApi | PatientAssessmentResultApi;

export type { AssessmentResultApi, PatientAssessmentResultApi, PredictionResultApi };
