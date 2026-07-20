interface PatientRepoInput {
     id: string;
     firstName: string;
     middleName: string;
     lastName: string;
     dob: string | Date;
     email: string;
     phone: string;
}

export type { PatientRepoInput };