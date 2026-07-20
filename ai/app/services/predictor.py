# JSON -> DataFrame -> predict() -> decode labels -> return response
from typing import Dict

import pandas as pd

from app.core.model_loader import model, explainer
from app.schemas.request import PredictionRequest

# maps encoded predictions back to their original labels
RISK_LABELS = {
    0: "Low Risk",
    1: "Mid Risk",
    2: "High Risk",
}


# runs inference using the trained XGBoost model and returns dictionary containing prediction, confidence and class probabilities..
def predict(request: PredictionRequest) -> Dict:
    # builds the dataframe in the exact training order
    features = pd.DataFrame(
        [{
            "Age": request.age,
            "SystolicBP": request.systolicBP,
            "DiastolicBP": request.diastolicBP,
            "BS": request.bs,
            "BodyTemp": request.bodyTemp,
            "HeartRate": request.heartRate,
        }]
    )

    # predict encoded class
    prediction = int(model.predict(features)[0])

    # compute shap
    shap_values = explainer(features)
    prediction_shap = shap_values[0, :, prediction]

    # predict class probabilities
    probabilities = model.predict_proba(features)[0]

    confidence = float(probabilities[prediction])

    # extract the most influencial factors
    importance = pd.DataFrame({
        "feature": features.columns,
        "impact": prediction_shap.values
    })

    importance["abs"] = importance["impact"].abs()

    importance = importance.sort_values(
        "abs",
        ascending=False
    )

    return {
        "prediction": RISK_LABELS[prediction],
        "confidence": round(confidence, 4),
        "probabilities": {
            "Low Risk": round(float(probabilities[0]), 4),
            "Mid Risk": round(float(probabilities[1]), 4),
            "High Risk": round(float(probabilities[2]), 4),
        },
        "topFactors": [
            {
                "feature": row.feature,
                "impact": round(float(row.impact), 4)
            }
            for _, row in importance.head(3).iterrows()
        ],
        "modelVersion": "1.0.0",
    }