import express from "express";
import { newUser ,getAllUser,getUser,deleteUser} from "../controllers/userController.js";
import { adminOnly } from "../middlewares/auth.js";
const app=express.Router();

app.post("/new",newUser);

app.get("/all",getAllUser);

app.get("/:id",adminOnly,getUser);

app.delete("/:id",adminOnly,deleteUser);

export default app;