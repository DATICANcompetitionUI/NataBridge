import { PoolClient } from "pg";
import { PatientRepoInput } from "../../models/patient/repo/patients.repo";


const createPatient = async (
    pool: PoolClient,
    patient: PatientRepoInput
) => {
    const result = await pool.query(
        `
        INSERT INTO patients (
            id,
            firstname,
            middlename,
            lastname,
            dob,
            email,
            phone
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `,
        [
            patient.id,
            patient.firstName,
            patient.middleName,
            patient.lastName,
            patient.dob,
            patient.email,
            patient.phone
        ]
    );

    return result.rows[0];
};

const getPatientsWithLatestAssessment = async(
    pool: PoolClient,
) => {
    const result = await pool.query(
        'SELECT * FROM get_patients_latest_assessment;'
    );

    return result.rows;
}

export {
    createPatient,
    getPatientsWithLatestAssessment
}