# natabridge
AI-powered maternal health risk stratification system for low-resource settings

**It is an AI-powered Hypertensive Disorder of Pregnancy Risk Stratification System**  
*Designed for low-resource healthcare settings in Nigeria and Sub-Saharan Africa*


## Overview
NataBridge is a clinical decision support system that uses machine learning to stratify
the risk of hypertensive disorders of pregnancy (HDP) - including preeclampsia - among
pregnant women attending antenatal care in low-resource settings.

The system is designed to support Community Health Workers (CHWs) and clinicians by:
- Predicting patient risk level (Low / Mid / High) from routinely collected vitals
- Explaining which clinical features drove each prediction (SHAP explainability)
- Tracking risk trends across multiple antenatal visits
- Generating actionable alerts and referral recommendations

This project is developed for the **DATICAN Artificial Intelligence in Medicine Competition**
at the University of Ibadan, Nigeria.


## Clinical Focus

Hypertensive disorders of pregnancy are among the leading causes of maternal mortality
in Nigeria and Sub-Saharan Africa. NataBridge targets the **first delay** in the Three
Delays Model - delayed recognition of danger signs — by enabling earlier, data-driven
identification of at-risk patients before complications escalate.


## System Architecture
Data Input (Vitals + History)
│
▼
Preprocessing Pipeline
│
▼
XGBoost Risk Classification Model
│
▼
SHAP Explainability Layer
│
▼
Alert Engine (Rule + AI Hybrid)
│
▼
CHW / Clinician Dashboard (Streamlit)
│
▼
Patient Record Store (SQLite)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Machine Learning | XGBoost, scikit-learn |
| Explainability | SHAP |
| API | FastAPI |
| Frontend | Streamlit |
| Database | SQLite + SQLAlchemy |
| Containerization | Docker |

---

## Dataset

Training data: [Maternal Health Risk Dataset](https://archive.ics.uci.edu/dataset/863/maternal+health+risk)  
Source: UCI Machine Learning Repository  
Features: Age, Systolic BP, Diastolic BP, Blood Sugar, Body Temperature, Heart Rate  
Target: Risk Level (Low / Mid / High)

---

## Quick Start

### Prerequisites
- Docker and Docker Compose installed
- OR Python 3.10+

### Run with Docker
```bash
git clone https://github.com/ojibovictor111-cpu/natabridge.git
cd natabridge
docker-compose up --build
```

### Run without Docker
```bash
pip install -r requirements.txt
# Start API
uvicorn src.api.main:app --reload
# Start Dashboard (new terminal)
streamlit run src/dashboard/app.py
```

---

## Project Structure
natabridge/

├── data/
│   ├── raw/                 
│   ├── processed/            
│   └── sample_patients.json  
├── notebooks/
│   ├── 01_EDA.ipynb
│   ├── 02_model_training.ipynb
│   └── 03_model_evaluation.ipynb
├── src/
│   ├── api/                  
│   ├── ml/                  
│   ├── dashboard/           
│   └── database/             
├── tests/
├── docker-compose.yml
├── Dockerfile
└── requirements.txt

---

## Team

| Name | Discipline | Role |
|---|---|---|
| Ojibo Victor | Electrical & Electronic Engineering | Project Lead, Systems Architecture |
| James Samuel | Computer Science | AI/ML, Backend Development |
| Oluwadimito Iyun | Biomedical Engineering | Clinical Research, Data Analysis |

University of Ibadan, Nigeria — 2026

---

## License

MIT License. See [LICENSE](LICENSE) for details.


