CREATE OR REPLACE VIEW get_dashboard_details AS
WITH latest_assessments AS (
    SELECT DISTINCT ON (assessment.patient_id)
        assessment.id AS assessment_id,
        assessment.patient_id,
        assessment.gestational_age,
        assessment.created_at,

        prediction_run.age,
        prediction_run.systolic_bp,
        prediction_run.diastolic_bp,
        prediction_run.blood_sugar,
        prediction_run.body_temperature_celsius,
        prediction_run.heart_rate,

        prediction_result.id AS prediction_result_id,
        prediction_result.prediction,
        prediction_result.confidence,
        prediction_result.low_risk_probability,
        prediction_result.mid_risk_probability,
        prediction_result.high_risk_probability

    FROM assessments assessment

    INNER JOIN prediction_runs prediction_run
        ON prediction_run.id = assessment.prediction_run_id
       AND prediction_run.source = 'patient_assessment'
       AND prediction_run.status = 'completed'

    INNER JOIN prediction_results prediction_result
        ON prediction_result.prediction_run_id = prediction_run.id

    ORDER BY
        assessment.patient_id,
        assessment.created_at DESC,
        assessment.id DESC
)

SELECT
    latest.assessment_id,
    latest.patient_id,

    CONCAT_WS(
        ' ',
        patient.firstname,
        patient.middlename,
        patient.lastname
    ) AS name,

    latest.age,
    latest.gestational_age,

    latest.prediction,
    latest.confidence,

    latest.low_risk_probability,
    latest.mid_risk_probability,
    latest.high_risk_probability,

    latest.systolic_bp,
    latest.diastolic_bp,
    latest.blood_sugar,
    latest.body_temperature_celsius,
    latest.heart_rate,

    latest.created_at,

    COALESCE(
        JSON_AGG(
            JSON_BUILD_OBJECT(
                'feature', prediction_factor.feature,
                'impact', prediction_factor.impact
            )
            ORDER BY ABS(prediction_factor.impact) DESC
        ) FILTER (
            WHERE prediction_factor.id IS NOT NULL
        ),
        '[]'::JSON
    ) AS factors

FROM latest_assessments latest

INNER JOIN patients patient
    ON patient.id = latest.patient_id

LEFT JOIN prediction_factors prediction_factor
    ON prediction_factor.prediction_result_id = latest.prediction_result_id

GROUP BY
    latest.assessment_id,
    latest.patient_id,
    patient.firstname,
    patient.middlename,
    patient.lastname,
    latest.age,
    latest.gestational_age,
    latest.prediction,
    latest.confidence,
    latest.low_risk_probability,
    latest.mid_risk_probability,
    latest.high_risk_probability,
    latest.systolic_bp,
    latest.diastolic_bp,
    latest.blood_sugar,
    latest.body_temperature_celsius,
    latest.heart_rate,
    latest.created_at

ORDER BY latest.created_at DESC;
