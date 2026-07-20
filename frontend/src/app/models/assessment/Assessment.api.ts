interface AssessmentApi {
     age: number;
     bloodSugar: number;
     bodyTemp: number;
     diastolicBP: number;
     heartRate: number;
     dob: string | null;
     systolicBP: number;
     email: string | null;
     firstPregnancy: boolean | null;
     firstname: string | null;
     gestationalAge: number | null
     lastname: string | null;
     middlename: string | null;
     phone: string | null;
     previousComplications: string | null;
}

export type { AssessmentApi };