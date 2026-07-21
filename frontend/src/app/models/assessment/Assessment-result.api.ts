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
  recommendations: {
    feature: string;
    patientValue: number;
    condition: string;
    actions: string[];
    counselling: string[];
  }[];
  modelVersion: string;
}

export type { AssessmentResultApi };