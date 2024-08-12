import express from "express";
import userRoutes from './routes/user.js';
import { connectionDB } from "./utils/db.js";
import { errorMiddleware } from "./middlewares/error.js";
const app = express();
const port = 7000;
connectionDB();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hola mundo");
});
app.use("/api/v1/user", userRoutes);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Server is runnig on ${port}`);
});
