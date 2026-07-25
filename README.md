# Natabridge
AI-powered maternal health risk stratification system for low-resource settings

**NataBridge is an AI-powered Hypertensive Disorder of Pregnancy Risk Stratification System**  
*Designed for low-resource healthcare settings in Nigeria and Sub-Saharan Africa*

![Python](https://img.shields.io/badge/Python-3.10-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
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
Maternal mortality remains one of the most pressing public health challenges in Africa, particularly in low-resource communities where access to timely and quality maternal healthcare is limited. According to the World Health Organization, hypertensive disorders of pregnancy-including pre-eclampsia and eclampsia-are among the leading causes of maternal and neonatal deaths, many of which are preventable through early detection and timely intervention.

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

Using maternal clinical information - including blood pressure and other risk factors-the system predicts maternal risk levels using machine learning models and explains each prediction using SHAP (SHapley Additive Explanations).

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


# Stakeholder Validation
To ensure that NataBridge addresses real healthcare needs and is acceptable to intended users, we conducted stakeholder validation through community surveys and engagements with healthcare professionals, several of whom now serve as clinical advisers to the NataBridge team on the NataBridge solution.

## Community Needs Assessment
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


## Clinical Stakeholder Validation
To complement the community survey, the NataBridge concept and prototype were presented to frontline healthcare professionals for clinical review.

Stakeholder engagements were conducted with healthcare professionals at:
- Agbowo Primary Health Centre, Ibadan
- Redeemer's Hospital, Ibadan

During these visits, nurses and physicians reviewed the proposed solution and validated the relevance of AI-assisted maternal risk prediction and early warning for strengthening antenatal care, particularly in low-resource settings. They emphasized that such a tool could support earlier identification of high-risk pregnancies, improve referral decisions, and complement routine maternal care without replacing clinical judgment.

Additional expert feedback was obtained from:

- Nurse and Midwife in the Faculty of Nursing, University of Ibadan, who provided guidance on maternal health workflows, antenatal care practices, patient safety, and appropriate clinical recommendations.
- Nurse-researcher from University College Hospital (UCH), Ibadan, who reviewed the innovation from a clinical research perspective and offered recommendations that strengthened the medical relevance, explainability, and practical applicability of the AI-assisted decision support system.


## Impact of Stakeholder Feedback
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

```text
                 Patient Clinical Data
                         │
                         ▼
              Feature Engineering
                         │
                         ▼
          XGBoost Prediction Model
                         │
                         ▼
              SHAP Explainability
                         │
                         ▼
           Recommendation Engine
                         │
                         ▼
           Emergency Alert Engine
                         │
                         ▼
      Healthcare Worker Dashboard
```

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


## AI Model Performance Metrics
The NataBridge maternal risk prediction model was evaluated using standard machine learning performance metrics.

| Metric | Value |
|---------|-------|
| Accuracy | 85.0% |
| Precision | 86.0% |
| Recall | 85.0% |
| F1-Score | 85.0% |
| ROC-AUC | 85.0% |

These metrics demonstrate the model's ability to accurately identify maternal risk while minimizing false negatives, which is critical for early detection of pregnancy-related complications.


## Explainable AI (SHAP)
Unlike many black-box AI systems, NataBridge provides transparent explanations using SHAP.

Healthcare workers can see the most influential clinical features contributing to each prediction, improving trust, accountability, and interpretability.


## Clinical Decision Support
Following every prediction, NataBridge generates structured recommendations including:

- Clinical Urgency Assessment
- Referral Recommendation
- Evidence-informed Clinical Guidance
- Maternal Danger Signs
- Recommended Next Actions
- Emergency Alerts

The system is designed to support-not replace-clinical judgment.


# Clinical Rationale

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

> **For the complete clinical rationale, literature review, feature engineering justification, clinical thresholds, ethical considerations, and development roadmap, please see [`docs/clinical_rationale.md`](docs/clinical_rationale.md).**



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
CHW / Clinician Dashboard (Angular)
    │
    ▼
Patient Record Store (Postgresql)
```


## The Technology Stack

| Layer | Technology |
|---|---|
| Machine Learning | XGBoost, scikit-learn |
| Explainability | SHAP |
| API | FastAPI |
| Frontend | Angular |
| Database | Postgresql |
| Containerization | Docker |

---



## Competition Deliverables
Team NataBridge developed and worked on the following deliverables:

1. AI-powered maternal risk prediction model (XGBoost)
2. Explainable AI using SHAP for transparent predictions
3. Hybrid AI + rule-based clinical recommendation engine
4. Emergency hypertension alert system
5. Angular-based Clinical Decision Support Dashboard
6. FastAPI backend API
7. Maternal risk classification (Low / Medium / High)
8. Stakeholder validation through community surveys and clinical engagement
9. Comprehensive Clinical Rationale documentation
10. Project documentation (README, architecture, installation guide, references)
11. GitHub repository with reproducible implementation

Together, these deliverables demonstrate a complete, explainable, stakeholder-informed, and clinically grounded AI-assisted Clinical Decision Support System designed for maternal healthcare in low-resource settings.

## Repository Structure
The repository is organized into modular components to separate data processing, machine learning, backend services, frontend visualization, and testing. This structure improves maintainability, scalability, and ease of collaboration.

### Directory Tree
```text
natabridge/
├── ai
│   ├── app
│   │   ├── api
│   │   │   └── predict.py
│   │   ├── core
│   │   │   └── model_loader.py
│   │   ├── schemas
│   │   │   ├── request.py
│   │   │   └── response.py
│   │   ├── services
│   │   │   ├── predictor.py
│   │   │   └── recommendations.py
│   │   └── main.py
│   ├── data
│   │   ├── processed
│   │   │   ├── test
│   │   │   │   ├── x_test.csv
│   │   │   │   └── y_test.csv
│   │   │   └── train
│   │   │       ├── x_train.csv
│   │   │       └── y_train.csv
│   │   └── raw
│   │       ├── kaggle_dataset_test.csv
│   │       └── uci_dataset_train.csv
│   ├── models
│   │   ├── random_forest.pkl
│   │   └── xgboost.pkl
│   ├── notebooks
│   │   ├── 01_EDA.ipynb
│   │   ├── 02_Preprocessing.ipynb
│   │   ├── 03_Training.ipynb
│   │   ├── 04_Evaluation.ipynb
│   │   └── 05_Explainability.ipynb
│   ├── Dockerfile
│   ├── requirements-dev.txt
│   ├── requirements.lock.xt
│   └── requirements.txt
├── backend
│   ├── configs
│   │   └── db.config.ts
│   ├── controllers
│   │   ├── assessment
│   │   │   └── assessment.controller.ts
│   │   ├── patient
│   │   │   └── patient.controller.ts
│   │   └── user
│   │       └── user.controller.ts
│   ├── db
│   │   ├── index
│   │   │   └── patient.index.sql
│   │   ├── views
│   │   │   └── getPatientAssessment.view.sql
│   │   ├── pool.ts
│   │   └── tables.db.sql
│   ├── models
│   │   ├── ai
│   │   │   └── aiApiResponse.model.ts
│   │   ├── assessment
│   │   │   ├── dto
│   │   │   │   └── assessment.dto.ts
│   │   │   ├── repo
│   │   │   │   └── assessment.repo.ts
│   │   │   └── assessmentFeatures.model.ts
│   │   ├── patient
│   │   │   ├── dto
│   │   │   │   └── patient.dto.ts
│   │   │   └── repo
│   │   │       └── patients.repo.ts
│   │   └── users
│   │       └── user.model.ts
│   ├── repositories
│   │   ├── assessment
│   │   │   └── assessment.repo.ts
│   │   ├── patient
│   │   │   └── patient.repo.ts
│   │   └── prediction.repo.ts
│   ├── routes
│   │   ├── assessment
│   │   │   └── assessment.route.ts
│   │   ├── patient
│   │   │   └── patient.route.ts
│   │   └── user
│   │       └── user.route.ts
│   ├── services
│   │   ├── assessment
│   │   │   └── assessment.service.ts
│   │   └── patient
│   │       └── patient.service.ts
│   ├── Dockerfile
│   ├── app.ts
│   ├── fastify.d.ts
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── pnpm-workspace.yaml
├── docs
│   ├── architecture.md
│   ├── clinical_rationale.md
│   └── technical_decisions.md
├── frontend
│   ├── .angular
│   ├── public
│   │   ├── favicon
│   │   │   ├── android-chrome-192x192.png
│   │   │   ├── android-chrome-512x512.png
│   │   │   ├── apple-touch-icon.png
│   │   │   ├── favicon-16x16.png
│   │   │   ├── favicon-32x32.png
│   │   │   ├── favicon.ico
│   │   │   └── site.webmanifest
│   │   ├── auth.webp
│   │   ├── home-heros.webp
│   │   └── logo.webp
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   │   ├── assessment
│   │   │   │   │   ├── result
│   │   │   │   │   │   ├── assessment-result.css
│   │   │   │   │   │   ├── assessment-result.html
│   │   │   │   │   │   ├── assessment-result.spec.ts
│   │   │   │   │   │   └── assessment-result.ts
│   │   │   │   │   └── test
│   │   │   │   │       ├── assessment-test.css
│   │   │   │   │       ├── assessment-test.html
│   │   │   │   │       ├── assessment-test.spec.ts
│   │   │   │   │       └── assessment-test.ts
│   │   │   │   ├── footer
│   │   │   │   │   ├── footer.css
│   │   │   │   │   ├── footer.html
│   │   │   │   │   ├── footer.spec.ts
│   │   │   │   │   └── footer.ts
│   │   │   │   ├── loaders
│   │   │   │   │   └── page-loader
│   │   │   │   │       ├── page-loader.css
│   │   │   │   │       ├── page-loader.html
│   │   │   │   │       ├── page-loader.spec.ts
│   │   │   │   │       └── page-loader.ts
│   │   │   │   ├── modals
│   │   │   │   │   ├── acknowledgement-dialog
│   │   │   │   │   │   ├── acknowledgement-dialog.css
│   │   │   │   │   │   ├── acknowledgement-dialog.html
│   │   │   │   │   │   ├── acknowledgement-dialog.spec.ts
│   │   │   │   │   │   └── acknowledgement-dialog.ts
│   │   │   │   │   ├── emergency-override-dialog
│   │   │   │   │   │   ├── emergency-override-dialog.css
│   │   │   │   │   │   ├── emergency-override-dialog.html
│   │   │   │   │   │   ├── emergency-override-dialog.spec.ts
│   │   │   │   │   │   └── emergency-override-dialog.ts
│   │   │   │   │   └── logout
│   │   │   │   │       ├── logout.css
│   │   │   │   │       ├── logout.html
│   │   │   │   │       ├── logout.spec.ts
│   │   │   │   │       └── logout.ts
│   │   │   │   ├── nav-bars
│   │   │   │   │   ├── dashboard-nav-bar
│   │   │   │   │   │   ├── dashboard-nav-bar.css
│   │   │   │   │   │   ├── dashboard-nav-bar.html
│   │   │   │   │   │   ├── dashboard-nav-bar.spec.ts
│   │   │   │   │   │   └── dashboard-nav-bar.ts
│   │   │   │   │   ├── landing-nav-bar
│   │   │   │   │   │   ├── landing-nav-bar.css
│   │   │   │   │   │   ├── landing-nav-bar.html
│   │   │   │   │   │   ├── landing-nav-bar.spec.ts
│   │   │   │   │   │   └── landing-nav-bar.ts
│   │   │   │   │   └── test-nav-bar
│   │   │   │   │       ├── test-nav-bar.css
│   │   │   │   │       ├── test-nav-bar.html
│   │   │   │   │       ├── test-nav-bar.spec.ts
│   │   │   │   │       └── test-nav-bar.ts
│   │   │   │   └── sections
│   │   │   │       └── heros
│   │   │   │           ├── heros.css
│   │   │   │           ├── heros.html
│   │   │   │           ├── heros.spec.ts
│   │   │   │           └── heros.ts
│   │   │   ├── core
│   │   │   │   └── typography
│   │   │   │       ├── h1
│   │   │   │       │   ├── h1.spec.ts
│   │   │   │       │   └── h1.ts
│   │   │   │       ├── h2
│   │   │   │       │   ├── h2.spec.ts
│   │   │   │       │   └── h2.ts
│   │   │   │       ├── h3
│   │   │   │       │   ├── h3.spec.ts
│   │   │   │       │   └── h3.ts
│   │   │   │       ├── lead
│   │   │   │       │   ├── lead.spec.ts
│   │   │   │       │   └── lead.ts
│   │   │   │       ├── muted
│   │   │   │       │   ├── muted.spec.ts
│   │   │   │       │   └── muted.ts
│   │   │   │       ├── p
│   │   │   │       │   ├── p.spec.ts
│   │   │   │       │   └── p.ts
│   │   │   │       └── small
│   │   │   │           ├── small.spec.ts
│   │   │   │           └── small.ts
│   │   │   ├── environment
│   │   │   │   └── environment.ts
│   │   │   ├── models
│   │   │   │   ├── api
│   │   │   │   │   ├── ApiResponse.ts
│   │   │   │   │   └── Error.ts
│   │   │   │   ├── assessment
│   │   │   │   │   ├── Assessment-result.api.ts
│   │   │   │   │   └── Assessment.api.ts
│   │   │   │   ├── auth
│   │   │   │   │   └── Auth.ui.ts
│   │   │   │   ├── patient
│   │   │   │   │   └── Patient.api.ts
│   │   │   │   └── user
│   │   │   │       └── User.api.ts
│   │   │   ├── pages
│   │   │   │   ├── auth
│   │   │   │   │   ├── auth.css
│   │   │   │   │   ├── auth.html
│   │   │   │   │   ├── auth.spec.ts
│   │   │   │   │   └── auth.ts
│   │   │   │   ├── dashboard
│   │   │   │   │   ├── assessment
│   │   │   │   │   │   ├── result
│   │   │   │   │   │   │   └── user-result
│   │   │   │   │   │   │       ├── user-result.css
│   │   │   │   │   │   │       ├── user-result.html
│   │   │   │   │   │   │       ├── user-result.spec.ts
│   │   │   │   │   │   │       └── user-result.ts
│   │   │   │   │   │   └── test
│   │   │   │   │   │       ├── user-assessment.css
│   │   │   │   │   │       ├── user-assessment.html
│   │   │   │   │   │       ├── user-assessment.spec.ts
│   │   │   │   │   │       └── user-assessment.ts
│   │   │   │   │   ├── home
│   │   │   │   │   │   ├── home.css
│   │   │   │   │   │   ├── home.html
│   │   │   │   │   │   ├── home.spec.ts
│   │   │   │   │   │   └── home.ts
│   │   │   │   │   ├── patients
│   │   │   │   │   │   ├── patients.css
│   │   │   │   │   │   ├── patients.html
│   │   │   │   │   │   ├── patients.spec.ts
│   │   │   │   │   │   └── patients.ts
│   │   │   │   │   └── template
│   │   │   │   │       ├── template.css
│   │   │   │   │       ├── template.html
│   │   │   │   │       ├── template.spec.ts
│   │   │   │   │       └── template.ts
│   │   │   │   ├── home
│   │   │   │   │   ├── home.css
│   │   │   │   │   ├── home.html
│   │   │   │   │   ├── home.spec.ts
│   │   │   │   │   └── home.ts
│   │   │   │   ├── quick-test
│   │   │   │   │   ├── quick-test.css
│   │   │   │   │   ├── quick-test.html
│   │   │   │   │   ├── quick-test.spec.ts
│   │   │   │   │   └── quick-test.ts
│   │   │   │   └── quick-test-result
│   │   │   │       ├── quick-test-result.css
│   │   │   │       ├── quick-test-result.html
│   │   │   │       ├── quick-test-result.spec.ts
│   │   │   │       └── quick-test-result.ts
│   │   │   ├── services
│   │   │   │   ├── assessment
│   │   │   │   │   ├── assessment-service.spec.ts
│   │   │   │   │   └── assessment-service.ts
│   │   │   │   ├── auth
│   │   │   │   │   ├── auth-service.spec.ts
│   │   │   │   │   └── auth-service.ts
│   │   │   │   ├── patient
│   │   │   │   │   ├── patient-service.spec.ts
│   │   │   │   │   └── patient-service.ts
│   │   │   │   └── util
│   │   │   │       ├── util-service.spec.ts
│   │   │   │       └── util-service.ts
│   │   │   ├── app.config.ts
│   │   │   ├── app.css
│   │   │   ├── app.html
│   │   │   ├── app.routes.ts
│   │   │   ├── app.spec.ts
│   │   │   └── app.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── material-theme.scss
│   │   └── styles.css
│   ├── .editorconfig
│   ├── .gitignore
│   ├── .postcssrc.json
│   ├── .prettierrc
│   ├── Dockerfile
│   ├── README.md
│   ├── angular.json
│   ├── components.json
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── pnpm-workspace.yaml
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   └── tsconfig.spec.json
├── LICENSE
├── README.md
├── docker-compose.yml
└── sample_patients.json
```


## Live Publish
Click <a href="https://natabridge-om17.onrender.com">Here</a>

## Quick Start
Follow the steps below to launch NataBridge locally from the terminal.

### Prerequisites

Ensure the following software is installed:
- Python 3.10 or later
- Git
- Node.js
- Docker Desktop (if you intend to start up with Docker)

### Clone the Repository
```bash
git clone https://github.com/DATICANcompetitionUI/NataBridge.git

cd natabridge
```

### Option 1 - Run with Docker (Recommended)

```bash
docker-compose up --build
```

### Option 2 - Run without Docker
```bash
# Install Ai requirements
pip install -r requirements.txt

# Start Ai Service
cd ai
uvicorn ai.app.main:app --reload

# Start Backend Service
cd ..
cd backend
pnpm install
pnpm run dev

# Start Frontend 
cd ..
cd frontend
pnpm install
pnpm exec ng build
```


The application will be available locally in your browser at http://localhost:4200




## Usage
NataBridge is designed as an AI-powered Clinical Decision Support System (CDSS) to assist healthcare professionals in identifying pregnant women who may be at risk of developing hypertensive disorders of pregnancy and other maternal complications.

### Step 1: Launch the Application
Start the backend API and Angular dashboard following the installation instructions. Open the dashboard in your web browser.

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
| Name             | Discipline                          | Primary Responsibilities                                                                            |
| ---------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| Ojibo Victor     | Electrical & Electronic Engineering | Project Lead • Systems Architecture • Product Strategy • Clinical Research • Stakeholder Validation | Hardware Enginneer |
| James Samuel     | Computer Science                    | AI Engineer • Backend Development • Frontend Development • Model Integration                        |
| Oluwadamito Iyun | Biomedical Engineering              | Clinical Research • Literature Review • Data Analysis • Clinical Validation                         |

University of Ibadan, Nigeria - 2026

---


## Key Innovation

NataBridge combines Explainable Artificial Intelligence (XAI), evidence-informed clinical decision support, stakeholder-validated design, and offline-first deployment into a single maternal health platform tailored for Community Health Workers and Primary Health Centres in low-resource settings.

Unlike conventional maternal risk prediction tools, NataBridge not only predicts maternal risk but also explains every prediction, generates evidence-informed clinical recommendations, and supports timely referral decisions while ensuring that qualified healthcare professionals remain central to patient care.



## License

MIT License. See [LICENSE](LICENSE) for details.


## Acknowledgements

We sincerely appreciate and say Thank You to:

- The DATICAN Team
- NACOS UI
- Agbowo Primary Health Centre, Ibadan
- Redeemer's Hospital, Ibadan
- Faculty of Nursing & Staff, University of Ibadan
- University College Hospital (UCH), Ibadan
- Our Community survey participants


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
