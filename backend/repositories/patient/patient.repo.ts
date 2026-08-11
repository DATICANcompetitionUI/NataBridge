import { PoolClient } from "pg";
import { PatientRepoInput } from "../../models/patient/repo/patients.repo";

type PatientSummaryRow = {
    id: string;
    name: string;
    age: string | number | null;
    gestationalAge: string | number | null;
    lastAssessment: string | Date | null;
    currentRiskLevel: string | null;
};

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
    const result = await pool.query<PatientSummaryRow>(
        'SELECT * FROM get_patients_latest_assessment;'
    );

    return result.rows;
}

const getPatientById = async (
    pool: PoolClient,
    patientId: string
) => {
    const result = await pool.query<PatientSummaryRow>(
        `
        SELECT *
        FROM get_patients_latest_assessment
        WHERE id = $1
        `,
        [patientId]
    );

    return result.rows[0];
};

const patientExists = async (
    pool: PoolClient,
    patientId: string
) => {
    const result = await pool.query(
        "SELECT EXISTS (SELECT 1 FROM patients WHERE id = $1) AS exists",
        [patientId]
    );

    return result.rows[0]?.exists === true;
};

export {
    createPatient,
    getPatientById,
    getPatientsWithLatestAssessment,
    patientExists
}

export type {
    PatientSummaryRow
};
