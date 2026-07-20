interface PatientApi {
    id: string;
    name: string;
    age: number | null;
    gestationalAge: number | null;
    lastAssessment: Date | null;
    currentRiskLevel: string | null;
}

export type { PatientApi };