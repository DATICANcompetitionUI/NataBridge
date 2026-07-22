interface AssessmentResultApi {
  assessmentId: string;
  prediction: {
    confidence: number;
    modelVersion: string;
    risk: string;
    probabilities: {
      "Low Risk": number;
      "Mid Risk": number;
      "High Risk": number;
    },
    topFactors: {
      feature: string;
      impact: number;
    }[];
    recommendations: {
      feature: string;
      patientValue: number;
      condition: string;
      actions: string[];
      counselling: string[];
    }[];
  };
}

export type { AssessmentResultApi };