# Natabridge
AI-powered maternal health risk stratification system for low-resource settings

**NataBridge is an AI-powered Hypertensive Disorder of Pregnancy Risk Stratification System**  
*Designed for low-resource healthcare settings in Nigeria and Sub-Saharan Africa*


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


## Our Solution
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


## The Overview
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
To ensure that NataBridge addresses real healthcare needs and is acceptable to intended users, we conducted stakeholder validation through community surveys and engagements with healthcare professionals, some of who are key advisers to NataBridge Team on the NataBridge solution.

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

A Nurse and Midwife in the Faculty of Nursing, University of Ibadan, who provided guidance on maternal health workflows, antenatal care practices, patient safety, and appropriate clinical recommendations.
A nurse-researcher from University College Hospital (UCH), Ibadan, who reviewed the innovation from a clinical research perspective and offered recommendations that strengthened the medical relevance, explainability, and practical applicability of the AI-assisted decision support system.

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

# AI Workflow
1. Healthcare worker enters maternal clinical information.
2. AI model predicts maternal risk level.
3. SHAP explains why the prediction was made.
4. Clinical recommendation engine generates evidence-informed recommendations.
5. Dashboard presents:
- Risk level
- Confidence score
- SHAP explanation
- Clinical recommendations
- Referral guidance
- Emergency alerts

# Explainable AI
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

The system is designed to support—not replace—clinical judgment.


## The System Architecture
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

## Dataset

Training data: [Maternal Health Risk Dataset](https://archive.ics.uci.edu/dataset/863/maternal+health+risk)  
Source: UCI Machine Learning Repository  
Features: Age, Systolic BP, Diastolic BP, Blood Sugar, Body Temperature, Heart Rate  
Target: Risk Level (Low / Mid / High)
                

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


### Project Structure

natabridge/
├── data/
│   ├── raw/ # Original dataset
│   ├── processed/ # Cleaned, feature-engineered data
│   └── sample_patients.json # Demo records for evaluation
├── notebooks/
│   ├── 01_EDA.ipynb
│   ├── 02_model_training.ipynb
│   └── 03_model_evaluation.ipynb
├── src/
│   ├── api/ # FastAPI backend
│   ├── ml/ # Model training, prediction, SHAP
│   ├── dashboard/ # Streamlit frontend
│   └── database/ # SQLAlchemy models and CRUD
├── tests/
├── docker-compose.yml
├── Dockerfile
└── requirements.txt

---

# Future Roadmap
Include ambitions such as:

- Wearable integration (NataBand).
- Real-time monitoring.
- SMS alerts for CHWs.
- Integration with national health information systems.
- Multilingual support.
- Electronic Medical Record integration.
- Full Mobile deployment.


## Team
| Name | Discipline | Role |
|---|---|---|
| Ojibo Victor | Electrical & Electronic Engineering | Project Lead, Systems Architecture, Product Strategy | Research & CLincal Validation|
| James Samuel | Computer Science | AI/ML, Frontend & Backend Developments |
| Oluwadamito Iyun | Biomedical Engineering | Clinical Research & Validation, Data Analysis |

University of Ibadan, Nigeria - 2026

---

## License

MIT License. See [LICENSE](LICENSE) for details.

__________________

# NataBridge - Clinical Rationale

**Version:** 1.0.0 
**Last Updated:** July 2026  
**Our Repository:** https://github.com/DATICANcompetitionUI/natabridge

---

## 1. The Target Condition

**Hypertensive Disorders of Pregnancy (HDP)**, including:
- Gestational hypertension
- Preeclampsia
- Severe preeclampsia
- Eclampsia

NataBridge focuses on **risk stratification** across this spectrum - placing patients into Low, Mid, or High risk categories - rather than claiming to diagnose any specific condition. This distinction is clinically and ethically important: the system is a decision support tool, not a diagnostic device.

---

## 2. Why Hypertensive Disorders of Pregnancy?

Hypertensive disorders of pregnancy (HDP) are among the top three direct causes of maternal mortality in Nigeria and across Sub-Saharan Africa. It accounts for 15% to 32% of all maternal deaths in the country according to National Institue of Health. HDP  are responsible for a significant proportion of the estimated 75,000 maternal deaths Nigeria records annually the highest absolute number of any country in the world, representing 29% of global maternal deaths in 2023.

HDP is particularly well-suited for AI-assisted risk stratification for four specific reasons:

**1. Measurable physiological precursors exist.**
The progression from gestational hypertension to preeclampsia to eclampsia follows a defined clinical pathway with measurable vital sign changes - elevated blood pressure, tachycardia, metabolic disruption - and this can be detected with non-invasive measurements any Community Health Worker can take.

**2. An intervention window exists.**
Unlike complications such as postpartum haemorrhage, which occur acutely after delivery, HDP develops progressively during pregnancy. This progression creates an actionable window between first signs and life-threatening emergency - and this is exactly the window NataBridge is designed to exploit through earlier identification and escalation.

**3. The data exists to train a meaningful model.**
The UCI Maternal Health Risk Dataset provides 1,014 labeled records with the key physiological features associated with HDP risk. This enables supervised classification model training without requiring locally collected clinical data - and this is appropriate for this competition prototype stage.

**4. The Three Delays Model maps directly onto the problem.**
Most HDP deaths in low-resource settings from our research occur because of Delay 1 - the woman or her Community Health Worker (CHW) does not recognise danger signs early enough to act. NataBridge directly targets this delay by enabling data-driven early identification of at-risk patients between and during antenatal visits.

---

## 3. Literature Review - Evidence Base for The Feature Selection

The clinical features selected for the NataBridge model are grounded in peer-reviewed evidence from Sub-Saharan African populations. The following three systematic reviews directly support our approach to solving this problem.

---

### Citation 1

**Title:** Systematic review of observational studies of the impact of cardiovascular risk factors on preeclampsia in sub-Saharan Africa

**Authors:** Hounkpatin OI, Amidou SA, Houehanou YC, Lacroix P, Preux PM, Houinato DS, Bezanahary H

**Journal:** BMC Pregnancy and Childbirth

**Year:** 2021

**PMID:** 33516185 | **DOI:** 10.1186/s12884-021-03566-2

**Key Finding:** A systematic review of 12 observational studies covering 24,369 pregnant women across Sub-Saharan Africa found that cardiovascular risk factors - including chronic hypertension, overweight, obesity, and diabetes - were significantly associated with elevated risk of preeclampsia.

**Relevance to NataBridge:** This study directly validates the inclusion of blood pressure and blood sugar as primary features in the NataBridge riskmodel. The finding that chronic hypertension and diabetes are independent risk factors for preeclampsia in Sub-Saharan African populations confirms that our model's reliance on systolic BP, diastolic BP, and blood sugar as the dominant predictive features is clinically justified and evidence-based for the target population NataBridge serves.
                    

### Citation 2

**Title:** Systematic and meta-analysis of factors associated with preeclampsia and eclampsia in sub-Saharan Africa

**Authors:** Meazaw MW, Chojenta C, Muluneh MD, Loxton D

**Journal:** PLOS ONE

**Year:** 2020

**PMID:** 32813750 | **DOI:** 10.1371/journal.pone.0237600

**Key Finding:** A meta-analysis of 51 studies across Sub-Saharan Africa identified the following as significant risk factors for preeclampsia and eclampsia: primiparity (OR: 2.52), previous history of preeclampsia (OR: 5.6), family history of preeclampsia (OR: 1.68), high maternal BMI (OR: 1.69), chronic hypertension (OR: 2.52), anaemia during pregnancy (OR:
3.22), and lack of antenatal care visits (OR: 2.71).

**Relevance to NataBridge:** This is the strongest single piece of evidence supporting the NataBridge feature set. The identification of chronic hypertension (OR: 2.52) as a major risk factor directly validates our blood pressure thresholds. The finding that lack of ANC attendance (OR: 2.71) significantly increases risk reinforces the core NataBridge mission:
Women who are least connected to the health system are most at risk, and CHW-delivered monitoring between visits is a clinical priority, not a convenience. This study also highlights anaemia and BMI as risk factors not currently captured in our dataset - these are important considerations for our future model expansion using locally collected Nigerian data.

---

### Citation 3

**Title:** Complications associated with adolescent childbearing in Sub-Saharan Africa: A systematic literature review and meta-analysis

**Authors:** Grønvik T, Sandøy IF

**Journal:** PLOS ONE

**Year:** 2018

**PMID:** 30256821 | **DOI:** 10.1371/journal.pone.0204327

**Key Finding:** A systematic review of 18 studies across Sub-Saharan Africa found that adolescent mothers (under 18 years) face significantly elevated risk of preeclampsia, eclampsia, preterm birth, and low birth weight compared to adult women aged 20–35 years.

**Relevance to NataBridge:** This study provides the evidence base for age as a risk feature in the NataBridge model at both extremes of the age distribution. While our model flags advanced maternal age (≥35 years) as an elevated risk indicator based on established clinical literature, this systematic review confirms that very young maternal age - also present in our dataset, which includes patients from age 10 - similarly elevates HDP risk in Sub-Saharan African populations. The UCI dataset's age range of 10–65 years means NataBridge's model encounters both high-risk age groups, and this study validates that age is a clinically meaningful predictor across the full spectrum, and not only at the upper end.

---

## 4. Clinical Features - Rationale

| Feature | Clinical Role | Evidence Basis |
|---|---|---|
| Systolic Blood Pressure | Primary diagnostic criterion for gestational hypertension (≥140 mmHg threshold) | WHO HDP diagnostic guidelines; Citation 1 — chronic hypertension OR 2.52 |
| Diastolic Blood Pressure | Secondary diagnostic criterion (≥90 mmHg threshold); combined with systolic BP defines the condition | WHO HDP diagnostic guidelines; Citation 2 — hypertension OR 2.52 |
| Blood Sugar | Metabolic risk marker; diabetes and hyperglycaemia co-occur with HDP through shared pathophysiology of insulin resistance and endothelial dysfunction | Citation 1 — diabetes significantly associated with preeclampsia risk in SSA |
| Body Temperature | Concurrent infection indicator; infections during pregnancy — particularly UTIs and malaria, both endemic in Nigeria — can precipitate or worsen hypertensive disorders | Clinical practice guidelines for antenatal care in low-resource settings |
| Heart Rate | Tachycardia (≥100 bpm) indicates cardiovascular stress, haemodynamic compromise, or early compensated shock — all conditions that compound HDP risk | Standard obstetric vital sign assessment protocols |
| Maternal Age | Both advanced maternal age (≥35 years) and adolescent age (<18 years) are independently associated with elevated HDP risk in SSA populations | Citation 3 — adolescent risk; established clinical literature on advanced maternal age |



## 5. Engineered Features - Clinical Justification

The NataBridge preprocessing pipeline engineers five additional features
from the six raw inputs. Each has a specific clinical basis:

| Engineered Feature | Formula | Clinical Basis |
|---|---|---|
| Mean Arterial Pressure (MAP) | (SBP + 2×DBP) / 3 | Better single summary of perfusion pressure than either BP reading alone. MAP < 60 mmHg indicates inadequate organ perfusion — a sign of haemodynamic compromise. |
| Pulse Pressure | SBP − DBP | Marker of arterial stiffness. Elevated pulse pressure (>60 mmHg) in pregnancy is associated with preeclampsia and increased cardiovascular risk. |
| Hypertension Flag | 1 if SBP ≥ 140 OR DBP ≥ 90 | Directly encodes the WHO diagnostic threshold for gestational hypertension as a binary feature, ensuring the model treats this boundary as clinically meaningful. |
| Advanced Maternal Age Flag | 1 if Age ≥ 35 | Encodes the well-documented clinical threshold above which maternal HDP risk increases substantially. Makes the age threshold explicit rather than relying on the model to infer it from continuous age values. |
| Tachycardia Flag | 1 if HR ≥ 100 bpm | Encodes the clinical definition of tachycardia as a binary safety signal, capturing cardiovascular stress that continuous heart rate values alone may underweight in the model. |



## 6. Clinical Thresholds Built Into the Alert Engine

The NataBridge hybrid alert engine combines model output with hard clinical
rules derived from WHO and standard obstetric practice guidelines:

| Threshold | Clinical Meaning | Alert Response |
|---|---|---|
| BP ≥ 140/90 mmHg | Diagnostic threshold for gestational hypertension | Minimum Level 2 alert — Review Soon |
| BP ≥ 160/110 mmHg | Severe hypertension in pregnancy — medical emergency | Level 3 alert — Refer Immediately (overrides model output) |
| HR ≥ 100 bpm | Tachycardia — cardiovascular stress signal | Tachycardia flag activated; contributes to risk score |
| Age ≥ 35 years | Advanced maternal age — established HDP risk factor | Advanced maternal age flag activated; contributes to risk score |
| Model confidence ≥ 0.70 on High Risk | Strong AI prediction of high risk | Level 3 alert triggered if no rule-based override already active |
| Model confidence < 0.70 on High Risk | Uncertain high risk prediction | Level 2 alert — escalate to review, not immediate referral |

**Critical safety principle:** The BP ≥ 160/110 mmHg threshold triggers a
Level 3 alert regardless of model output. The AI model cannot downgrade a
patient presenting with severe hypertension. Clinical rules create the
safety floor. The AI model adds sensitivity above that floor.

---

## 7. Risk Stratification Output

| Risk Level | Definition | Recommended CHW Action |
|---|---|---|
| Low | No significant risk signals detected across all features | Continue routine ANC schedule. Reinforce danger sign education. |
| Mid | One or more borderline indicators present, or BP approaching threshold | Increase visit frequency. Schedule review within 48 hours. Counsel on danger signs: severe headache, visual changes, facial and hand swelling, reduced fetal movement. |
| High | Multiple risk signals present, or threshold breaches detected | Refer to Primary Healthcare Centre or secondary facility immediately. Do not wait for next scheduled ANC visit. |



## 8. Dataset

**Name:** UCI Maternal Health Risk Dataset  
**Source:** UCI Machine Learning Repository  
**Kaggle:** https://www.kaggle.com/datasets/csafrit2/maternal-health-risk-data  
**Records:** 1,014 patient records  
**Features:** Age, Systolic BP, Diastolic BP, Blood Sugar, Body Temperature,
Heart Rate  
**Target:** Risk Level (Low / Mid / High)  
**Collection context:** Data collected from different hospitals, community
clinics, and maternal health camps in rural areas.



## 9. Limitations

The NataBridge solution prototype has been built for the DATICAN AI in Medicine
Competition. The following limitations currently exist and are being taken note of and worked upon before
proceeding for full real-world deployment:

**1. Not validated on Nigerian patient data.**
The model was trained on the UCI Maternal Health Risk Dataset, which was
collected in rural Bangladesh — not Nigeria. While the clinical features
and risk factors are broadly applicable across Sub-Saharan African
populations (as supported by the literature reviewed above), the specific
risk distributions, threshold values, and clinical patterns may differ
in Nigerian antenatal populations. Local validation on Nigerian patient
data is required before any clinical deployment.

**2. Not a diagnostic device.**
NataBridge does not diagnose preeclampsia, gestational hypertension, or
any other condition. It produces a risk stratification output — Low, Mid,
or High — to support clinical decision-making. All outputs must be
interpreted by a qualified healthcare worker in the context of a full
clinical assessment.

**3. Clinical examination cannot be replaced.**
The NataBridge model does not capture urine protein levels, which are
a key diagnostic criterion for preeclampsia (proteinuria ≥300 mg/24h).
It also does not capture oedema, fetal heart rate, fundal height, or
other parameters assessed during physical examination. A high-risk
classification from NataBridge must prompt — not replace — a full
clinical assessment at a Primary Healthcare Centre.

**4. Limited feature set.**
The UCI dataset does not include parity, previous obstetric history,
BMI, anaemia status, or family history of preeclampsia — all of which
were identified as significant risk factors in Citation 2 (Meazaw et
al., 2020, OR values ranging from 1.68 to 5.6). The model's predictive
performance may improve substantially when these features are
incorporated in future iterations trained on locally collected data.

**5. Dataset size.**
1,014 training records is sufficient for a competition prototype and
for demonstrating the clinical validity of the approach. However, it
is small by clinical AI standards. A production system would require
tens of thousands of records from the target population, collected
under IRB-approved protocols, before the model could be considered
reliable enough for deployment in real clinical settings.

**6. No regulatory approval.**
NataBridge has not undergone NAFDAC device registration, NITDA
compliance review, or any other regulatory assessment. It must not
be used in any clinical setting without appropriate regulatory approval
and ethical clearance from the University of Ibadan and relevant
Nigerian health authorities.

---

## 10. Ethical Considerations

**Data privacy:** Any deployment of NataBridge must comply with the Nigeria
Data Protection Regulation (NDPR) and applicable health data laws. Patient
records must be stored securely, access must be restricted to authorised
healthcare workers, and patient consent must be obtained before data
collection.

**Algorithmic fairness:** The model has not been evaluated for performance
disparities across demographic subgroups within the Nigerian population.
Future validation studies should assess whether the model performs equally
well across age groups, geographical regions, and socioeconomic strata.

**Human oversight:** NataBridge is explicitly designed as a tool to support
human clinical judgment, not to replace it. No alert generated by the system
should be acted upon without the judgment of a qualified healthcare worker.
The system's recommendations are starting points for clinical action, not
clinical decisions in themselves.



## 11. Long-Term Development Pathway

The current NataBridge model is the first step in a planned development
trajectory:

**Phase 2 (Post-competition):** Integrate the NataBridge Device (ESP32 +
MAX30102 + DS18B20) wearable to enable continuous vital sign monitoring
between ANC visits. Validate sensor accuracy on Nigerian skin tones
specifically.

**Phase 3:** Conduct observational data collection at partner Primary
Healthcare Centres in Nigeria under IRB approval. Retrain the model on
locally collected data to address the Bangladesh dataset limitation.

**Phase 4:** Expand the feature set to include parity, BMI, anaemia status,
and previous obstetric history — the factors identified in Citation 2 as
significant but not currently captured.

**Phase 5:** Seek NAFDAC registration and NITDA compliance review for
clinical deployment. Partner with State Ministries of Health for pilot
deployment in selected Local Government Areas.


## Acknowledgements

We sincerely appreciate and say Thank You to:

- DATICAN Team
- NACOS UI
- Agbowo Primary Health Centre, Ibadan
- Redeemer's Hospital, Ibadan
- Faculty of Nursing, University of Ibadan
- University College Hospital (UCH), Ibadan
- Community survey participants


*NataBridge - DATICAN AI in Medicine Competition 2026*  
*University of Ibadan, Nigeria*  



*Contact: thenatabridge@gmail.com*
