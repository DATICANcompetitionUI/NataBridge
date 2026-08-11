# Development database setup

The backend now treats standalone predictions and patient assessments as separate records.
There is intentionally no migration from the previous development schema.

For a disposable existing database, execute these files in order:

1. `reset.dev.sql` - deletes the existing NataBridge views, tables, and data.
2. `tables.db.sql` - creates the fresh tables and constraints.
3. `index/patient.index.sql` - creates indexes.
4. `views/getPatientAssessment.view.sql` - creates the patient-list view.
5. `views/dashboardDetails.view.sql` - creates the dashboard view.

Do not run `reset.dev.sql` against a database whose data must be retained.

For a brand-new database, the equivalent bootstrap files are mirrored under
the repository-level `database/init` directory.
