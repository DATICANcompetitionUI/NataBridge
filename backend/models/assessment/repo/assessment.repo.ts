interface AssessmentRepoInput {
     id: string;
     patientId: string;
     predictionRunId: string;
     createdByUserId: string;
     gestationalAge: number | null;
     firstPregnancy: boolean | null;
     previousComplications: string | null;
}

export type { AssessmentRepoInput }
