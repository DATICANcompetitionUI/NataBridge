CREATE OR REPLACE VIEW get_patients_latest_assessment AS
SELECT
     p.id,
     CONCAT_WS(
          ' ',
          p.firstname,
          p.middlename,
          p.lastname
     ) AS name,

     latest.age,
     latest.gestational_age AS "gestationalAge",
     latest.created_at AS "lastAssessment",
     latest.prediction AS "currentRiskLevel"
FROM patients p
LEFT JOIN LATERAL (
     SELECT
          a.age,
          a.gestational_age,
          a.created_at,
          pr.prediction
     FROM assessments a
     LEFT JOIN prediction_results pr
          ON pr.assessment_id = a.id
     WHERE a.patient_id = p.id
     ORDER BY a.created_at DESC
     LIMIT 1
) latest ON TRUE
ORDER BY p.created_at DESC;