from fastapi import FastAPI

from app.api.predict import router

app = FastAPI(
    title="NataBridge AI Service",
    version="1.0.0"
)

app.include_router(router)