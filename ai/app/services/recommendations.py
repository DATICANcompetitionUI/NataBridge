from typing import Dict


def get_feature_recommendation(
    feature: str,
    value: float,
) -> Dict:

    if feature == "SystolicBP":
        if value >= 160:
            return {
                "feature": "Systolic Blood Pressure",
                "patientValue": value,
                "condition": "Severe hypertension range.",
                "actions": [
                    "Seek emergency medical care immediately.",
                    "Do not wait for the next routine antenatal visit.",
                ],
                "counselling": [
                    "Remain calm and rest while awaiting transport.",
                    "Ensure someone accompanies you to the healthcare facility.",
                ],
            }

        elif value >= 140:
            return {
                "feature": "Systolic Blood Pressure",
                "patientValue": value,
                "condition": "Elevated blood pressure requiring clinical assessment.",
                "actions": [
                    "Seek same-day clinical assessment at a healthcare facility.",
                    "Repeat the blood pressure measurement after rest.",
                ],
                "counselling": [
                    "Do not delay seeking clinical review.",
                    "Report severe headache or visual changes immediately.",
                ],
            }

        elif value >= 130:
            return {
                "feature": "Systolic Blood Pressure",
                "patientValue": value,
                "condition": "Borderline elevated blood pressure.",
                "actions": [
                    "Repeat the measurement after a period of rest.",
                    "Continue monitoring blood pressure trends.",
                ],
                "counselling": [
                    "Reduce salt and processed food intake.",
                    "Report headache, swelling, or visual disturbances.",
                ],
            }

    elif feature == "DiastolicBP":
        if value >= 110:
            return {
                "feature": "Diastolic Blood Pressure",
                "patientValue": value,
                "condition": "Severe diastolic hypertension range.",
                "actions": [
                    "Seek emergency medical care immediately.",
                ],
                "counselling": [
                    "Do not delay emergency assessment.",
                ],
            }

        elif value >= 90:
            return {
                "feature": "Diastolic Blood Pressure",
                "patientValue": value,
                "condition": "Elevated diastolic blood pressure.",
                "actions": [
                    "Seek clinical assessment within 24–48 hours.",
                    "Repeat the measurement after rest.",
                ],
                "counselling": [
                    "Monitor for headache, swelling, or visual changes.",
                ],
            }

    elif feature == "BS":
        if value >= 11.1:
            return {
                "feature": "Blood Sugar",
                "patientValue": value,
                "condition": "Severely elevated blood sugar range.",
                "actions": [
                    "Seek urgent medical assessment.",
                    "Follow clinician-directed blood sugar management.",
                ],
                "counselling": [
                    "Do not skip prescribed medications.",
                    "Report vomiting, abdominal pain, or difficulty breathing.",
                ],
            }

        elif value >= 7.8:
            return {
                "feature": "Blood Sugar",
                "patientValue": value,
                "condition": "Elevated blood sugar requiring clinical assessment.",
                "actions": [
                    "Seek clinical assessment for gestational diabetes management.",
                    "Begin dietary management as advised by a healthcare professional.",
                ],
                "counselling": [
                    "Avoid sugar-sweetened beverages and excessive refined carbohydrates.",
                    "Monitor blood sugar as directed by a clinician.",
                ],
            }

        elif value >= 5.1:
            return {
                "feature": "Blood Sugar",
                "patientValue": value,
                "condition": "Borderline elevated blood sugar.",
                "actions": [
                    "Attend formal gestational diabetes screening.",
                    "Increase blood sugar monitoring as advised.",
                ],
                "counselling": [
                    "Reduce sugary foods and refined carbohydrates.",
                    "Choose balanced meals with complex carbohydrates, protein, and vegetables.",
                ],
            }

    elif feature == "BodyTemp":
        if value >= 39.1:
            return {
                "feature": "Body Temperature",
                "patientValue": value,
                "condition": "High fever requiring urgent assessment.",
                "actions": [
                    "Seek urgent medical assessment.",
                    "Investigate possible infection under clinical supervision.",
                ],
                "counselling": [
                    "Keep hydrated.",
                    "Seek medical care immediately.",
                ],
            }

        elif value >= 38.1:
            return {
                "feature": "Body Temperature",
                "patientValue": value,
                "condition": "Moderate to high fever.",
                "actions": [
                    "Seek same-day clinical assessment.",
                    "Investigate possible infection.",
                ],
                "counselling": [
                    "Keep hydrated and rest.",
                    "Do not take unprescribed medication during pregnancy.",
                ],
            }

    elif feature == "HeartRate":
        if value >= 120:
            return {
                "feature": "Heart Rate",
                "patientValue": value,
                "condition": "Severe tachycardia.",
                "actions": [
                    "Seek same-day clinical assessment.",
                    "Assess for possible anaemia, infection, dehydration, or other causes.",
                ],
                "counselling": [
                    "Rest and avoid physical exertion.",
                    "Seek medical care without delay.",
                ],
            }

        elif value >= 100:
            return {
                "feature": "Heart Rate",
                "patientValue": value,
                "condition": "Elevated heart rate.",
                "actions": [
                    "Rest and repeat the measurement.",
                    "Assess possible causes such as fever, anaemia, dehydration, or anxiety.",
                ],
                "counselling": [
                    "Drink water if dehydrated.",
                    "Report palpitations, dizziness, breathlessness, or chest discomfort.",
                ],
            }

    elif feature == "Age":
        if value < 18:
            return {
                "feature": "Maternal Age",
                "patientValue": value,
                "condition": "Adolescent pregnancy requiring enhanced antenatal monitoring.",
                "actions": [
                    "Maintain regular antenatal care visits.",
                    "Discuss additional monitoring needs with a healthcare professional.",
                ],
                "counselling": [
                    "Attend every antenatal appointment.",
                    "Report swelling, headache, or bleeding immediately.",
                ],
            }

        elif value >= 35:
            return {
                "feature": "Maternal Age",
                "patientValue": value,
                "condition": "Advanced maternal age associated with increased pregnancy risk.",
                "actions": [
                    "Maintain enhanced antenatal monitoring.",
                    "Discuss blood pressure, blood sugar, and delivery planning with a healthcare professional.",
                ],
                "counselling": [
                    "Do not skip antenatal appointments.",
                    "Report headache, swelling, or reduced fetal movement immediately.",
                ],
            }

    return {
        "feature": feature,
        "patientValue": value,
        "condition": "No feature-specific action required based on this value.",
        "actions": [],
        "counselling": [],
    }

def generate_recommendations(
    top_factors: list[dict],
    feature_values: dict,
) -> list[dict]:

    recommendations = []

    for factor in top_factors:
        feature = factor["feature"]
        value = feature_values[feature]

        recommendation = get_feature_recommendation(
            feature=feature,
            value=value,
        )

        recommendations.append(recommendation)

    return recommendations