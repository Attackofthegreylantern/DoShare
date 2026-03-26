from fastapi import APIRouter


users_handler = APIRouter(prefix="/users", tags=["users"])


@users_handler.get("/")
async def get_users():
    return {"message": "Get all users"}
