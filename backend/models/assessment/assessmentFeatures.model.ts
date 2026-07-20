interface AiFeatures {
     age: number;
     systolicBP: number;
     diastolicBP: number;
     bloodSugar: number;
     bodyTemp: number;
     heartRate: number;
}

interface PersonalInformation {
     firstname: string | null;
     middlename: string | null;
     lastname: string | null;
     dob: string | Date | null;
     email: string | null;
     phone: string | null;
}

interface SecondaryInformation {
     gestationalAge: number | null;
     firstPregnancy: boolean | null;
     previousComplications: string | null;
}

export type { AiFeatures, PersonalInformation, SecondaryInformation }