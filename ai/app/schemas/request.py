from pydantic import BaseModel, Field

class PredictionRequest(BaseModel):

    age: int = Field(..., ge=10, le=70)

    systolicBP: int = Field(..., ge=60, le=250)

    diastolicBP: int = Field(..., ge=30, le=150)

    bs: float = Field(..., ge=2)

    bodyTemp: float = Field(..., ge=90, le=110)

    heartRate: int = Field(..., ge=30, le=220)