-- DEVELOPMENT ONLY: removes the current NataBridge schema and all of its data.
-- Run this before tables.db.sql when rebuilding a disposable development DB.
BEGIN;

DROP VIEW IF EXISTS get_dashboard_details;
DROP VIEW IF EXISTS get_patients_latest_assessment;

DROP TABLE IF EXISTS prediction_factors;
DROP TABLE IF EXISTS prediction_results;
DROP TABLE IF EXISTS assessments;
DROP TABLE IF EXISTS prediction_runs;
DROP TABLE IF EXISTS patients;

COMMIT;
