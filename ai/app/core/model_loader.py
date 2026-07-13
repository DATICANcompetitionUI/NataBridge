from pathlib import Path
import joblib

MODEL_PATH = Path(__file__).resolve().parents[2] / "models" / "xgboost.pkl"

print(f"Loading model from: {MODEL_PATH}")

model = joblib.load(MODEL_PATH)

print("Model loaded successfully.")