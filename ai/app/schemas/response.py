from pydantic import BaseModel

class TopFactor(BaseModel):
    feature: str
    impact: float


class PredictionResponse(BaseModel):
    prediction: str
    confidence: float
    probabilities: dict[str, float]
    topFactors: list[TopFactor]
    modelVersion: str