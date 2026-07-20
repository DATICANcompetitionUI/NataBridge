interface AssessmentResultApi {
  prediction: string;
  confidence: number;
  probabilities: {
    "Low Risk": number;
    "Mid Risk": number;
    "High Risk": number;
  },
  topFactors: {
      feature: string;
      impact: number;
    }[];
  modelVersion: string;
}

export type { AssessmentResultApi };