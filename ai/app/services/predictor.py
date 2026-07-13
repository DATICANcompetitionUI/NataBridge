# JSON -> DataFrame -> predict() -> decode labels -> return response
from typing import Dict

import pandas as pd

from app.core.model_loader import model
from app.schemas.request import PredictionRequest

# Maps encoded predictions back to their original labels
RISK_LABELS = {
    0: "Low Risk",
    1: "Mid Risk",
    2: "High Risk",
}


def predict(request: PredictionRequest) -> Dict:
    """
    Runs inference using the trained XGBoost model.

    Args:
        request: Validated prediction request.

    Returns:
        Dictionary containing prediction, confidence and class probabilities.
    """

    # Build dataframe in EXACT training order
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

    # Predict encoded class
    prediction = int(model.predict(features)[0])

    # Predict class probabilities
    probabilities = model.predict_proba(features)[0]

    confidence = float(probabilities[prediction])

    return {
        "prediction": RISK_LABELS[prediction],
        "confidence": round(confidence, 4),
        "probabilities": {
            "Low Risk": round(float(probabilities[0]), 4),
            "Mid Risk": round(float(probabilities[1]), 4),
            "High Risk": round(float(probabilities[2]), 4),
        },
        "modelVersion": "1.0.0",
    }