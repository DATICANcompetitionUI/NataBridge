# NataBridge - System Architecture

## Overview

NataBridge follows a layered architecture separating data ingestion,
ML inference, alert generation, and presentation concerns.

## Component Breakdown

### 1. Data Input Layer
Accepts patient vitals via:
- Manual entry through the Streamlit dashboard
- CSV batch upload for multiple patients
- (Future) Automated feed from ESP32-based wearable device

**Input features:**
- Age (years)
- Systolic Blood Pressure (mmHg)
- Diastolic Blood Pressure (mmHg)
- Blood Sugar (mmol/L)
- Body Temperature (°C)
- Heart Rate (bpm)
- Gestational Age (weeks) — collected but used for alert logic
- Parity — collected for clinical context

### 2. Preprocessing Pipeline (`src/ml/preprocess.py`)
- Input validation and range checking
- Missing value handling
- Feature normalization (StandardScaler)
- Feature alignment with training schema

### 3. Risk Classification Model (`src/ml/`)
- Algorithm: XGBoost Classifier
- Output classes: Low / Mid / High risk
- Trained on UCI Maternal Health Risk Dataset
- Saved as: `src/ml/models/risk_model.pkl`

### 4. Explainability Layer (`src/ml/explain.py`)
- SHAP TreeExplainer applied to XGBoost model
- Per-prediction feature contribution scores
- Displayed as ranked contributors in dashboard

### 5. Alert Engine (`src/api/routes/alerts.py`)
Hybrid rule + AI alert system:
- **Rule layer:** BP > 140/90 triggers immediate flag regardless of model output
- **AI layer:** Model confidence > 0.75 on High risk triggers escalation alert
- Alert levels: 1 (Monitor), 2 (Review), 3 (Refer immediately)

### 6. FastAPI Backend (`src/api/`)
RESTful API exposing:
- `POST /predict` — Run risk prediction
- `GET/POST /patients` — Patient record management
- `GET /alerts` — Active alert feed
- `GET /trends/{patient_id}` — Risk trajectory over visits

### 7. Streamlit Dashboard (`src/dashboard/app.py`)
Two user views:
- **CHW View:** Patient list, risk badges, alert feed, referral prompts
- **Clinician View:** Population analytics, trend charts, SHAP explanations

### 8. Database (`src/database/`)
- SQLite via SQLAlchemy ORM
- Tables: patients, visits, predictions, alerts
- Portable: no server required, runs as a local file

## Future Integration (Post-Competition)
- ESP32 + MAX30102 + DS18B20 wearable device
- BLE/GSM data relay to API
- Automated visit logging from wearable feed
