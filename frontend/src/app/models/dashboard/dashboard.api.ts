interface DashboardAssessment {
  id: string;
  patientId: string;

  name: string;
  age: number;
  gestationalAge: number | null;

  currentRiskLevel: string;
  confidence: number;

  lastAssessment: string;

  systolicBP: number;
  diastolicBP: number;
  bloodSugar: number;
  bodyTemperatureCelsius: number;
  heartRate: number;

  factors: {
    feature: string;
    impact: number;
  }[];
}

interface DashboardResponse {
  summary: {
    high: number;
    mid: number;
    low: number;
  };

  priorityAssessments: DashboardAssessment[];
  recentAssessments: DashboardAssessment[];
}

export type {DashboardAssessment, DashboardResponse}