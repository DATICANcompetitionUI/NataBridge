from pathlib import Path
import joblib
import shap

MODEL_PATH = Path(__file__).resolve().parents[2] / "models" / "xgboost.pkl"

print(f"Loading model from: {MODEL_PATH}")

model = joblib.load(MODEL_PATH)

# shap explainer 
explainer = shap.TreeExplainer(model)

print("Model loaded successfully.")