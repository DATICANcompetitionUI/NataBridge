-- patients 
CREATE TABLE patients (
    id varchar(50) PRIMARY KEY,

    firstname VARCHAR(100),
    middlename VARCHAR(100),
    lastname VARCHAR(100),

    dob DATE,

    email VARCHAR(255),
    phone VARCHAR(30),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- assessments
CREATE TABLE assessments (
    id varchar(50) PRIMARY KEY,
    patient_id varchar(50) NOT NULL,

    -- secondary information
    gestational_age NUMERIC(5, 2),
    first_pregnancy BOOLEAN,
    previous_complications TEXT,

    -- ai features
    age NUMERIC(5, 2) NOT NULL,
    systolic_bp NUMERIC(6, 2) NOT NULL,
    diastolic_bp NUMERIC(6, 2) NOT NULL,
    blood_sugar NUMERIC(6, 2) NOT NULL,
    body_temperature_celsius NUMERIC(5, 2) NOT NULL,
    heart_rate NUMERIC(6, 2) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_assessment_patient
        FOREIGN KEY (patient_id)
        REFERENCES patients(id)
        ON DELETE CASCADE
);

-- prediction result
CREATE TABLE prediction_results (
    id varchar(50) PRIMARY KEY,

    assessment_id varchar(50) NOT NULL UNIQUE,

    prediction VARCHAR(30) NOT NULL,
    confidence NUMERIC(6, 5) NOT NULL,

    low_risk_probability NUMERIC(6, 5) NOT NULL,
    mid_risk_probability NUMERIC(6, 5) NOT NULL,
    high_risk_probability NUMERIC(6, 5) NOT NULL,

    model_version VARCHAR(100) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_prediction_assessment
        FOREIGN KEY (assessment_id)
        REFERENCES assessments(id)
        ON DELETE CASCADE
);

CREATE TABLE prediction_factors (
    id varchar(50) PRIMARY KEY,

    prediction_result_id varchar(50) NOT NULL,

    feature VARCHAR(100) NOT NULL,
    impact NUMERIC(10, 5) NOT NULL,

    CONSTRAINT fk_factor_prediction
        FOREIGN KEY (prediction_result_id)
        REFERENCES prediction_results(id)
        ON DELETE CASCADE
);