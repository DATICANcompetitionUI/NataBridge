CREATE OR REPLACE VIEW get_dashboard_details AS
WITH latest_assessments AS (
    SELECT DISTINCT ON (a.patient_id)
        a.id AS assessment_id,
        a.patient_id,
        a.gestational_age,
        a.age,
        a.systolic_bp,
        a.diastolic_bp,
        a.blood_sugar,
        a.body_temperature_celsius,
        a.heart_rate,
        a.created_at,

        pr.id AS prediction_result_id,
        pr.prediction,
        pr.confidence,
        pr.low_risk_probability,
        pr.mid_risk_probability,
        pr.high_risk_probability

    FROM assessments a

    INNER JOIN prediction_results pr
        ON pr.assessment_id = a.id

    ORDER BY
        a.patient_id,
        a.created_at DESC
)

SELECT
    la.assessment_id,
    la.patient_id,

    CONCAT_WS(
        ' ',
        p.firstname,
        p.middlename,
        p.lastname
    ) AS name,

    la.age,
    la.gestational_age,

    la.prediction,
    la.confidence,

    la.low_risk_probability,
    la.mid_risk_probability,
    la.high_risk_probability,

    la.systolic_bp,
    la.diastolic_bp,
    la.blood_sugar,
    la.body_temperature_celsius,
    la.heart_rate,

    la.created_at,

    COALESCE(
        JSON_AGG(
            JSON_BUILD_OBJECT(
                'feature', pf.feature,
                'impact', pf.impact
            )
        ) FILTER (
            WHERE pf.id IS NOT NULL
        ),
        '[]'
    ) AS factors

FROM latest_assessments la

INNER JOIN patients p
    ON p.id = la.patient_id

LEFT JOIN prediction_factors pf
    ON pf.prediction_result_id = la.prediction_result_id

GROUP BY
    la.assessment_id,
    la.patient_id,
    p.firstname,
    p.middlename,
    p.lastname,
    la.age,
    la.gestational_age,
    la.prediction,
    la.confidence,
    la.low_risk_probability,
    la.mid_risk_probability,
    la.high_risk_probability,
    la.systolic_bp,
    la.diastolic_bp,
    la.blood_sugar,
    la.body_temperature_celsius,
    la.heart_rate,
    la.created_at

ORDER BY la.created_at DESC;