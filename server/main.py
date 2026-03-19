from fastapi import FastAPI
from handlers.users import users_handler

app = FastAPI()

app.include_router(router=users_handler)


@app.get("/")
async def ping():
    return {"do": "share"}
