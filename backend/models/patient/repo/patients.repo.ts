interface PatientRepoInput {
     id: string;
     firstName: string;
     middleName: string | null;
     lastName: string;
     dob: string | Date;
     email: string | null;
     phone: string | null;
}

export type { PatientRepoInput };
