# Natabridge
AI-powered maternal health risk stratification system for low-resource settings

**NataBridge is an AI-powered Hypertensive Disorder of Pregnancy Risk Stratification System**  
*Designed for low-resource healthcare settings in Nigeria and Sub-Saharan Africa*

![Python](https://img.shields.io/badge/Python-3.10-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![Streamlit](https://img.shields.io/badge/Streamlit-Dashboard-red)
![XGBoost](https://img.shields.io/badge/XGBoost-ML-orange)
![SHAP](https://img.shields.io/badge/Explainable%20AI-SHAP-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Project Highlights

- AI-powered Clinical Decision Support System (CDSS) for maternal healthcare.
- Explainable AI using SHAP to improve transparency and clinician trust.
- Machine learning-powered maternal risk prediction using XGBoost.
- Clinically validated through stakeholder engagement with healthcare professionals.
- Designed specifically for low-resource communities in Nigeria and Sub-Saharan Africa.
- Offline-first architecture for Primary Health Centres and Community Health Workers.
- Hybrid AI + rule-based emergency alert system for severe hypertension.

> **Developed for the NACOS–UI DATICAN AI in Medicine Competition 2026**, NataBridge combines explainable AI, clinical decision support, and stakeholder-informed design to improve maternal healthcare in low-resource settings.


## Table of Contents
- Problem Statement
- Impact
- Solution
- Stakeholder Validation
- Clinical Rationale
- AI Workflow
- Installation
- Usage
- Team
- References


## Problem Statement
Maternal mortality remains one of the most pressing public health challenges in Africa, particularly in low-resource communities where access to timely and quality maternal healthcare is limited. According to the World Health Organization, hypertensive disorders of pregnancy-including pre-eclampsia and eclampsia—are among the leading causes of maternal and neonatal deaths, many of which are preventable through early detection and timely intervention.

Unfortunately, many pregnant women attend antenatal clinics infrequently, live far from healthcare facilities, or are identified only after complications have become severe. Primary Health Centres (PHCs) and Community Health Workers (CHWs), who serve as the first point of care for many women, often have limited decision-support tools for identifying high-risk pregnancies early.

Current maternal healthcare systems are largely reactive rather than preventive. Existing digital health solutions are often expensive, require continuous internet connectivity, or lack explainability, making them difficult to adopt in low-resource settings.

There is therefore a need for an affordable, explainable, AI-powered clinical decision support system that enables early maternal risk identification, supports frontline healthcare workers, and facilitates timely referrals before complications become life-threatening.


## Why It Matters (The Impact)
NataBridge is designed to strengthen maternal healthcare by enabling earlier detection of pregnancy-related complications and supporting timely clinical intervention.

The solution empowers Community Health Workers, Primary Health Centres, and healthcare professionals with AI-assisted risk prediction and evidence-based clinical recommendations while ensuring that healthcare professionals remain central to clinical decision-making.

Through continuous monitoring, explainable AI, and structured referral recommendations, NataBridge aims to:

- Reduce preventable maternal and neonatal deaths.
- Improve early identification of hypertensive disorders of pregnancy.
- Support faster and more informed clinical decision-making.
- Strengthen referral pathways between communities and healthcare facilities.
- Improve access to quality maternal healthcare in underserved communities.
- Increase trust in AI through transparent SHAP explanations.
- Promote equitable healthcare by supporting offline-first deployment in low-resource environments.

By combining artificial intelligence with human clinical expertise, NataBridge transforms maternal healthcare from reactive treatment to proactive prevention.


## Our Solution - NataBridge
NataBridge is an AI-powered Clinical Decision Support System (CDSS) developed to assist healthcare workers in identifying pregnant women at risk of developing hypertensive disorders of pregnancy and other maternal complications.

Using maternal clinical information—including blood pressure and other risk factors-the system predicts maternal risk levels using machine learning models and explains each prediction using SHAP (SHapley Additive Explanations).

Rather than replacing healthcare professionals, NataBridge augments clinical decision-making by providing:

- AI-powered maternal risk prediction.
- Explainable AI insights.
- Personalized clinical recommendations.
- Emergency alerts.
- Referral guidance.
- Patient education.
- Offline-first accessibility for low-resource settings.


## How NataBridge Works
NataBridge is a clinical decision support system that uses machine learning to stratify
the risk of hypertensive disorders of pregnancy (HDP) - including preeclampsia - among
pregnant women attending antenatal care in low-resource settings.

The system is designed to support Community Health Workers (CHWs) and clinicians by:
- Predicting patient risk level (Low / Mid / High) from routinely collected vitals
- Explaining which clinical features drove each prediction (SHAP explainability)
- Tracking risk trends across multiple antenatal visits
- Generating actionable alerts and referral recommendations

This project has been developed for the **DATICAN Artificial Intelligence in Medicine Competition**
at the University of Ibadan, Nigeria.


## Stakeholder Validation
To ensure that NataBridge addresses real healthcare needs and is acceptable to intended users, we conducted stakeholder validation through community surveys and engagements with healthcare professionals, several of whom now serve as clinical advisers to the NataBridge team on the NataBridge solution.

# Community Needs Assessment
A structured survey was conducted among potential users across urban, peri-urban, and rural communities. Respondents included students and healthcare workers. The findings revealed strong demand for affordable digital health solutions that support early detection and monitoring of maternal and chronic health conditions.

Key findings included:
- Many respondents reported delaying healthcare due to high costs, long waiting times, transportation challenges, limited availability of health workers, and lack of awareness.
- Respondents identified hypertension, pregnancy complications, diabetes, and malaria as common health concerns in their communities.
- Nearly all respondents considered early detection of diseases such as hypertension to be important and expressed concern about late diagnosis.
- Strong interest was expressed in using a wearable device capable of monitoring blood pressure, heart rate and other vital signs, particularly if it remained affordable.
- Participants consistently ranked blood pressure monitoring, heart rate monitoring, AI-assisted symptom assessment, emergency alerts, medication reminders, and health education among the most valuable features.
- Most respondents indicated they would trust AI-generated health insights when reviewed by healthcare professionals, reflecting support for AI as a clinical decision-support tool rather than a replacement for clinicians.
- Respondents strongly preferred an application capable of offline operation with support for local languages to improve accessibility in low-resource settings.

The survey also demonstrated encouraging market acceptance, with many participants expressing willingness to purchase an affordable wearable device or access it through subscription or institutional sponsorship models.


# Clinical Stakeholder Validation
To complement the community survey, the NataBridge concept and prototype were presented to frontline healthcare professionals for clinical review.

Stakeholder engagements were conducted with healthcare professionals at:
- Agbowo Primary Health Centre, Ibadan
- Redeemer's Hospital, Ibadan

During these visits, nurses and physicians reviewed the proposed solution and validated the relevance of AI-assisted maternal risk prediction and early warning for strengthening antenatal care, particularly in low-resource settings. They emphasized that such a tool could support earlier identification of high-risk pregnancies, improve referral decisions, and complement routine maternal care without replacing clinical judgment.

Additional expert feedback was obtained from:

- Nurse and Midwife in the Faculty of Nursing, University of Ibadan, who provided guidance on maternal health workflows, antenatal care practices, patient safety, and appropriate clinical recommendations.
- Nurse-researcher from University College Hospital (UCH), Ibadan, who reviewed the innovation from a clinical research perspective and offered recommendations that strengthened the medical relevance, explainability, and practical applicability of the AI-assisted decision support system.


# Impact of Stakeholder Feedback
Insights gathered from community members and healthcare professionals directly informed the refinement of NataBridge by:

- Strengthening the AI-powered clinical recommendation engine.
- Incorporating explainable AI (SHAP) to improve transparency and clinician trust.
- Prioritizing blood pressure monitoring and maternal risk prediction.
- Improving usability for Community Health Workers (CHWs) and Primary Health Centres (PHCs).
- Supporting offline-first functionality suitable for low-resource environments.
- Emphasizing patient education, emergency referral pathways, and maternal danger-sign awareness.
- Reinforcing that NataBridge functions as a Clinical Decision Support System (CDSS) designed to assist—rather than replace—qualified healthcare professionals.

These validation activities are to demonstrate that NataBridge has been developed through continuous engagement with prospective users and healthcare stakeholders, to ensure that the solution we are building is clinically relevant, user-centred, and responsive to the realities of maternal healthcare delivery in underserved communities.


## The Clinical Focus
Hypertensive disorders of pregnancy are among the leading causes of maternal mortality in Nigeria and Sub-Saharan Africa. NataBridge targets the **first delay** in the Three Delays Model - delayed recognition of danger signs — by enabling earlier, data-driven identification of at-risk patients before complications escalate.


## Key Features
- AI-powered maternal risk prediction.
- Explainable AI using SHAP.
- Maternal risk classification (Low, Medium, High).
- Clinical Decision Support recommendations.
- Emergency hypertension alerts.
- Maternal danger-sign education.(Fully Upcoming)
- Referral recommendations.
- User-friendly dashboard for healthcare workers.


# Why NataBridge Stands Out
| Existing Solutions             | NataBridge                                                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Black-box AI predictions       | Explainable AI using SHAP for transparent decision-making                                                              |
| Prediction only                | Prediction + Clinical Decision Support recommendations                                                                 |
| Focused on hospitals           | Designed for Community Health Workers and Primary Health Centres                                                       |
| Internet-dependent             | Offline-first architecture for low-resource settings                                                                   |
| Limited clinical guidance      | Evidence-informed referral pathways and emergency alerts                                                               |
| Generic healthcare tools       | Specifically tailored for maternal risk prediction and hypertensive disorders of pregnancy                             |
| Minimal stakeholder engagement | Co-designed and refined through community surveys and validation by nurses, doctors, PHCs, and maternal health experts |
| Difficult to interpret         | Confidence scores, SHAP explanations, and clinician-friendly recommendations                                           |

NataBridge combines artificial intelligence, explainable machine learning, and evidence-informed clinical decision support into a single platform tailored for low-resource maternal healthcare. By integrating AI predictions with transparent explanations, emergency referral guidance, and extensive stakeholder validation, NataBridge goes beyond risk prediction to provide a practical, trusted, and scalable solution for frontline healthcare workers.


## Dataset

The initial machine learning model was developed and evaluated using the **Maternal Health Risk Dataset** from the **UCI Machine Learning Repository**, a publicly available dataset containing maternal clinical parameters associated with pregnancy risk.

**Source:** UCI Machine Learning Repository

**Dataset:** Maternal Health Risk Dataset

https://archive.ics.uci.edu/dataset/863/maternal+health+risk

### Features
- Age
- Systolic Blood Pressure
- Diastolic Blood Pressure
- Blood Sugar
- Body Temperature
- Heart Rate

### Target Variable
- Low Risk
- Mid Risk
- High Risk

This dataset served as the baseline for developing and validating the NataBridge maternal risk prediction model. Future versions will incorporate locally collected clinical datasets to improve generalizability across African populations.



# How the AI Works (AI Workflow)
Input

↓

Prediction

↓

Explainability

↓

Recommendation

↓

Clinical Decision

1. Input: Healthcare worker enters maternal clinical information.
2. Prediction: AI model predicts maternal risk level.
3. Explainability: SHAP explains why the prediction was made.
4. Recommendation: Clinical recommendation engine generates evidence-informed recommendations.
5. Clinical Decision: Here, the dashboard presents:
- Risk level
- Confidence score
- SHAP explanation
- Clinical recommendations
- Referral guidance
- Emergency alerts


# AI Model Performance Metrics
The NataBridge maternal risk prediction model was evaluated using standard machine learning performance metrics.

| Metric | Value |
|---------|-------|
| Accuracy | XX.X% |
| Precision | XX.X% |
| Recall | XX.X% |
| F1-Score | XX.X% |
| ROC-AUC | XX.X% |

These metrics demonstrate the model's ability to accurately identify maternal risk while minimizing false negatives, which is critical for early detection of pregnancy-related complications.


# Explainable AI (SHAP)
Unlike many black-box AI systems, NataBridge provides transparent explanations using SHAP.

Healthcare workers can see the most influential clinical features contributing to each prediction, improving trust, accountability, and interpretability.


# Clinical Decision Support
Following every prediction, NataBridge generates structured recommendations including:

- Clinical urgency
- Recommended facility
- Referral requirement
- Patient education
- Danger signs
- Immediate next steps

The system is designed to support-not replace-clinical judgment.

## Clinical Rationale

NataBridge was developed to address the early identification of Hypertensive Disorders of Pregnancy (HDP), including gestational hypertension, preeclampsia, severe preeclampsia, and eclampsia—conditions that remain among the leading causes of maternal mortality in Nigeria and Sub-Saharan Africa.

Rather than diagnosing disease, NataBridge functions as an AI-powered Clinical Decision Support System (CDSS) that stratifies pregnant women into **Low**, **Medium**, or **High** maternal risk categories. This approach supports healthcare professionals in making timely, evidence-informed referral decisions while preserving clinical judgement.

The prediction model utilizes clinically relevant physiological parameters including:
- Age
- Systolic Blood Pressure
- Diastolic Blood Pressure
- Blood Sugar
- Body Temperature
- Heart Rate

To improve predictive performance and clinical interpretability, the system also engineers additional features such as:
- Mean Arterial Pressure (MAP)
- Pulse Pressure
- Hypertension Flag
- Advanced Maternal Age Flag
- Tachycardia Flag

Clinical safety is reinforced through rule-based thresholds aligned with international obstetric guidelines. For example, patients presenting with blood pressure ≥160/110 mmHg automatically trigger an emergency referral recommendation irrespective of the AI prediction, ensuring patient safety remains paramount.

The design of NataBridge is informed by WHO recommendations, peer-reviewed literature, and stakeholder consultations with clinicians, nurses, midwives, and maternal health experts.

> **For the complete clinical rationale, literature review, feature engineering justification, clinical thresholds, ethical considerations, and development roadmap, please see [`docs/Clinical_Rationale.md`](docs/Clinical_Rationale.md).**


## The System Architecture
```text
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
Alert Engine (Rule + AI Hybrid) & Recommendation Engine
    │
    ▼
CHW / Clinician Dashboard (Streamlit)
    │
    ▼
Patient Record Store (SQLite)
```


## The Technology Stack

| Layer | Technology |
|---|---|
| Machine Learning | XGBoost, scikit-learn |
| Explainability | SHAP |
| API | FastAPI |
| Frontend | Streamlit |
| Database | SQLite + SQLAlchemy |
| Containerization | Docker |

---

## Repository Structure
The repository is organized into modular components to separate data processing, machine learning, backend services, frontend visualization, and testing. This structure improves maintainability, scalability, and ease of collaboration.

### Repository Overview

| Directory/File | Description |
|---------------|-------------|
| `data/` | Raw, processed, and sample maternal health datasets |
| `notebooks/` | Exploratory data analysis, model training, and evaluation notebooks |
| `src/api/` | FastAPI backend for AI prediction services |
| `src/ml/` | Machine learning pipeline, XGBoost model, prediction engine, and SHAP explainability |
| `src/dashboard/` | Streamlit dashboard for healthcare professionals |
| `src/database/` | Database models and CRUD operations |
| `tests/` | Unit and integration tests |
| `docker-compose.yml` | Docker Compose configuration |
| `Dockerfile` | Docker container configuration |
| `requirements.txt` | Python project dependencies |
| `README.md` | Project documentation |

### Directory Tree
```text
natabridge/
│
├── data/
│   ├── raw/                         # Original maternal health dataset
│   ├── processed/                   # Cleaned and feature-engineered datasets
│   └── sample_patients.json         # Sample patient records for testing
│
├── notebooks/
│   ├── 01_EDA.ipynb                 # Exploratory Data Analysis
│   ├── 02_model_training.ipynb      # Model training pipeline
│   └── 03_model_evaluation.ipynb    # Model evaluation and performance metrics
│
├── src/
│   ├── api/                         # FastAPI backend services
│   ├── ml/                          # Machine Learning models, prediction & SHAP
│   ├── dashboard/                   # Streamlit web dashboard
│   └── database/                    # Database models and CRUD operations
│
├── tests/                           # Unit and integration tests
│
├── docker-compose.yml               # Docker Compose configuration
├── Dockerfile                       # Docker image definition
├── requirements.txt                 # Python dependencies
└── README.md                        # Project documentation
```


## Installation & Setup

Follow the steps below to set up and run NataBridge locally.

### Prerequisites

Ensure the following software is installed:
- Python 3.10 or later
- Git
- Node.js (if running the frontend)
- pip (Python package manager)

### Clone the Repository
```bash
git clone https://github.com/DATICANcompetitionUI/NataBridge.git
cd NataBridge
```

### Create a Virtual Environment
```bash
python -m venv venv
```

Activate the virtual environment.

**Windows**
```bash
venv\Scripts\activate
```

**macOS/Linux**
```bash
source venv/bin/activate
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run the Backend
```bash
python app.py
```

or

```bash
uvicorn app:app --reload
```

*(Use whichever command matches your project.)*

### Run the Frontend

If applicable:

```bash
cd frontend
npm install
npm run dev
```

The application will be available locally in your browser.

Backend:
```
http://localhost:8000
```

Frontend:
```
http://localhost:5173
```

*(Update the ports if your project uses different ones.)*


## Quick Start
Follow the steps below to launch NataBridge locally.

### Option 1 - Run with Docker (Recommended)
```bash
git clone https://github.com/ojibovictor111-cpu/natabridge.git
cd natabridge
docker-compose up --build
```

### Option 2 - Run without Docker
```bash
pip install -r requirements.txt
# Start API
uvicorn src.api.main:app --reload
# Start Dashboard (new terminal)
streamlit run src/dashboard/app.py
#The dashboard will open automatically in your browser.
```


## Usage
NataBridge is designed as an AI-powered Clinical Decision Support System (CDSS) to assist healthcare professionals in identifying pregnant women who may be at risk of developing hypertensive disorders of pregnancy and other maternal complications.

### Step 1: Launch the Application
Start the backend API and Streamlit dashboard following the installation instructions. Open the dashboard in your web browser.

### Step 2: Enter Patient Information
Input the patient's clinical information into the prediction form, including:
- Age
- Systolic Blood Pressure (SBP)
- Diastolic Blood Pressure (DBP)
- Blood Sugar
- Body Temperature
- Heart Rate

### Step 3: Generate AI Prediction
Click the **Predict Risk** button.

The trained XGBoost model analyzes the patient's clinical data and classifies the maternal risk level as:

- 🟢 Low Risk
- 🟡 Medium Risk
- 🔴 High Risk

### Step 4: Review Explainable AI Results
The system generates SHAP (SHapley Additive Explanations) visualizations that highlight the clinical features contributing most to the prediction.

This enables healthcare professionals to understand why the AI produced a particular risk classification.

### Step 5: Review Clinical Recommendations
Based on the predicted risk level, NataBridge automatically generates evidence-informed recommendations, including:
- Risk level and confidence score
- Clinical interpretation
- Recommended urgency
- Referral recommendations
- Recommended healthcare facility
- Maternal danger signs
- Immediate next clinical actions
- Emergency alerts for severe hypertension

### Step 6: Support Clinical Decision-Making
Healthcare professionals use the AI prediction together with SHAP explanations and clinical recommendations to support timely, evidence-informed decision-making and referral.

> **Note:** NataBridge is intended to support—not replace—the clinical judgement of qualified healthcare professionals.



## Sample Prediction

### Sample Input

| Clinical Parameter | Value |
|--------------------|------:|
| Age | 29 years |
| Systolic BP | 165 mmHg |
| Diastolic BP | 112 mmHg |
| Blood Sugar | 7.8 mmol/L |
| Body Temperature | 37.4 °C |
| Heart Rate | 96 bpm |

### AI Output

| Result | Output |
|--------|--------|
| Risk Level | 🔴 High Risk |
| Confidence | 96.4% |
| Top SHAP Features | Systolic BP, Diastolic BP, Blood Sugar |
| Clinical Recommendation | Immediate referral to a Comprehensive Emergency Obstetric Care (CEmONC) facility |
| Emergency Alert | Severe Hypertension Detected |

This example demonstrates how NataBridge combines machine learning, explainable AI, and clinical decision support to facilitate early detection and timely intervention for high-risk pregnancies.



# Future Roadmap
The NataBridge solutions will incorporate future features such as:

- Wearable integration (NataBand).
- Real-time monitoring for PHCs.
- SMS alerts for CHWs.
- Integration with National health information systems.
- Multilingual support.
- Electronic Medical Record integration.
- Full Mobile deployment.


## Team
| Name | Discipline | Role |
|---|---|---|
| Ojibo Victor | Electrical & Electronic Engineering | Project Lead, Systems Architecture, Product Strategy | Research & CLincal Validation|
| James Samuel | Computer Science | Lead AI Engineer, Frontend & Backend Development |
| Oluwadamito Iyun | Biomedical Engineering | Clinical Research & Validation, Data Analysis |

University of Ibadan, Nigeria - 2026

---

## License

MIT License. See [LICENSE](LICENSE) for details.


## Acknowledgements

We sincerely appreciate and say Thank You to:

- DATICAN Team
- NACOS UI
- Agbowo Primary Health Centre, Ibadan
- Redeemer's Hospital, Ibadan
- Faculty of Nursing, University of Ibadan
- University College Hospital (UCH), Ibadan
- Community survey participants


## Conclusion & Future Vision

NataBridge demonstrates how explainable artificial intelligence can strengthen maternal healthcare in low-resource settings by enabling early risk identification, supporting evidence-informed clinical decisions, and facilitating timely referrals.

Developed with continuous input from healthcare professionals, researchers, and potential users, NataBridge combines machine learning, explainable AI, and clinical decision support into a practical solution designed for Community Health Workers and Primary Health Centres. Rather than replacing healthcare professionals, the platform empowers them with transparent insights and actionable recommendations that can improve maternal outcomes.

Our long-term vision is to evolve NataBridge into a scalable digital health platform integrated with wearable monitoring devices, national health systems, and community-based maternal care programs across Africa, contributing to the reduction of preventable maternal and neonatal deaths while advancing equitable access to quality healthcare.


## References

The development of NataBridge was informed by established literature, international clinical guidelines, publicly available machine learning resources, and open-source technologies.

1. World Health Organization. (2023). Trends in Maternal Mortality 2000–2023: Estimates by WHO, UNICEF, UNFPA, World Bank Group and the United Nations Population Division. Geneva, Switzerland.
2. World Health Organization. (2023). WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience. Geneva, Switzerland.
3. International Society for the Study of Hypertension in Pregnancy (ISSHP). (2021). The ISSHP Classification, Diagnosis and Management Recommendations for Hypertensive Disorders of Pregnancy.
4. American College of Obstetricians and Gynecologists (ACOG). (2020). Gestational Hypertension and Preeclampsia: Practice Bulletin No. 222.
5. Lundberg, S. M., & Lee, S. I. (2017). A Unified Approach to Interpreting Model Predictions. Proceedings of the 31st Conference on Neural Information Processing Systems (NeurIPS).
6. Chen, T., & Guestrin, C. (2016). XGBoost: A Scalable Tree Boosting System. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining.
7. Pedregosa, F., et al. (2011). Scikit-learn: Machine Learning in Python. Journal of Machine Learning Research, 12, 2825–2830.
8. Harris, C. R., et al. (2020). Array Programming with NumPy. Nature, 585(7825), 357–362.
9. McKinney, W. (2010). Data Structures for Statistical Computing in Python. Proceedings of the 9th Python in Science Conference.
10. Plotly Technologies Inc. Plotly Python Graphing Library. https://plotly.com/python/
11. FastAPI. FastAPI Documentation. https://fastapi.tiangolo.com/
12. React. React Documentation. https://react.dev/
13. Python Software Foundation. Python Programming Language. https://www.python.org/
14. SHAP Documentation. SHapley Additive Explanations. https://shap.readthedocs.io/
15. University College Hospital (UCH), Ibadan; Agbowo Primary Health Centre, Ibadan; Redeemer's Hospital, Ibadan. Clinical stakeholder consultations and expert feedback conducted during the development of NataBridge (2026).
16. NataBridge Community Needs Assessment Survey (2026). Primary stakeholder survey conducted among prospective users to identify healthcare challenges, validate solution needs, and inform system design.

    ### Primary Sources
The following primary sources directly informed the design and refinement of NataBridge:

- Community Needs Assessment Survey conducted by Team NataBridge (2026).
- Stakeholder engagement with Agbowo Primary Health Centre, Ibadan.
- Stakeholder engagement with Redeemer's Hospital, Ibadan.
- Expert consultation with a Nurse and Midwife, Faculty of Nursing, University of Ibadan.
- Clinical research consultation with a Nurse Researcher, University College Hospital (UCH), Ibadan.


*NataBridge - DATICAN AI in Medicine Competition 2026*  
*University of Ibadan, Nigeria*  



*Contact: thenatabridge@gmail.com*
