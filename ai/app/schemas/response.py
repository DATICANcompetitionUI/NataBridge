from pydantic import BaseModel

class TopFactor(BaseModel):
    feature: str
    impact: float

class Recommendation(BaseModel):
    feature: str
    patientValue: float
    condition: str
    actions: list[str]
    counselling: list[str]


class PredictionResponse(BaseModel):
    prediction: str
    confidence: float
    probabilities: dict[str, float]
    topFactors: list[TopFactor]
    recommendations: list[Recommendation]
    modelVersion: str