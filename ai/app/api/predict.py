from fastapi import APIRouter, HTTPException

from app.schemas.request import PredictionRequest
from app.schemas.response import PredictionResponse
from app.services.predictor import predict

router = APIRouter(
    prefix="",
    tags=["Prediction"],
)


@router.post("/predict", response_model=PredictionResponse)
async def predict_risk(request: PredictionRequest):
    """
    Predict maternal health risk.
    """

    try:
        result = predict(request)
        return result

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Prediction failed: {str(e)}"
        )