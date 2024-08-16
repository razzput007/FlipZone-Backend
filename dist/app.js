import express from "express";
import userRoutes from './routes/user.js';
import { connectionDB } from "./utils/db.js";
import { errorMiddleware } from "./middlewares/error.js";
import productRoutes from "./routes/product.js";
const app = express();
const port = 7000;
connectionDB();
app.use(express.json());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Server is runnig on ${port}`);
});
