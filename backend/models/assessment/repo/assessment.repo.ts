interface AssessmentRepoInput {
     patientId: string;
     age: number;
     systolicBP: number;
     diastolicBP: number;
     bloodSugar: number;
     bodyTemp: number;
     heartRate: number;
     bodyTemperatureCelsius: number;
     gestationalAge: number | null;
     firstPregnancy: boolean | null;
     previousComplications: string | null;
}

export type { AssessmentRepoInput }