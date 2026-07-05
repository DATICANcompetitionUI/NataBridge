# NataBridge — Clinical Rationale

## Target Condition

**Hypertensive Disorders of Pregnancy (HDP)**, including:
- Gestational hypertension
- Preeclampsia
- Severe preeclampsia
- Eclampsia

## Why HDP?

Hypertensive disorders of pregnancy account for approximately 10–15% of maternal
deaths globally and are disproportionately prevalent in Sub-Saharan Africa. In Nigeria,
preeclampsia and eclampsia are among the top three direct causes of maternal mortality.

HDP is particularly suited for AI-assisted risk stratification because:
1. It has a defined clinical progression with measurable physiological precursors
2. Key risk signals (blood pressure, heart rate, blood sugar) are non-invasive and
   collectable in primary care settings
3. Early identification significantly changes clinical management and outcomes
4. The window between gestational hypertension and eclampsia provides an intervention
   opportunity that current antenatal visit schedules often miss

## Three Delays Model Application

NataBridge specifically targets **Delay 1: Delayed recognition of danger signs.**

By providing CHWs with AI-assisted risk scores between and during antenatal visits,
the system enables earlier identification of patients who need escalated care —
before symptoms become emergencies.

Note: NataBridge does not directly address Delay 3 (receiving appropriate care at
facility level), which requires infrastructure, personnel, and supply chain interventions
beyond the scope of this system.

## Clinical Features Selected

| Feature | Clinical Relevance |
|---|---|
| Systolic BP | Primary diagnostic criterion for gestational hypertension (≥140 mmHg) |
| Diastolic BP | Secondary BP criterion; diastolic ≥90 mmHg is a diagnostic threshold |
| Blood Sugar | Elevated levels correlate with metabolic risk in pregnancy |
| Body Temperature | Fever may indicate concurrent infection complicating HDP |
| Heart Rate | Tachycardia can indicate hemodynamic compromise |
| Age | Advanced maternal age (>35) is an established HDP risk factor |

## Risk Stratification Output

| Level | Definition | Recommended Action |
|---|---|---|
| Low | No significant risk signals detected | Continue routine ANC schedule |
| Mid | One or more borderline indicators present | Increase visit frequency; monitor closely |
| High | Multiple risk signals or threshold breaches | Refer to PHC or secondary facility immediately |

## Important Limitations

- NataBridge is a **clinical decision support tool**, not a diagnostic device
- All outputs must be interpreted by a qualified healthcare worker
- The system does not replace clinical examination, urine protein testing,
  or laboratory investigation
- Model performance is based on training data; local validation is required
  before deployment in any clinical setting
