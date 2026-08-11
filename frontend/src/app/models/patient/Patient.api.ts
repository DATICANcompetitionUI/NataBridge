interface PatientApi {
  id: string;
  name: string;
  age: number | null;
  gestationalAge: number | null;
  lastAssessment: string | Date | null;
  currentRiskLevel: string | null;
}

export type { PatientApi };
