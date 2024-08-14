import express from "express";
import { newUser ,getAllUser,getUser,deleteUser} from "../controllers/userController.js";

const app=express.Router();

app.post("/new",newUser);

app.get("/all",getAllUser);

app.get("/:id",getUser);

app.delete("/:id",deleteUser);

export default app;