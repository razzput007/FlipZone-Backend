import  express  from "express";
import { adminOnly } from "../middlewares/auth.js";
import  {singleUpload} from "../middlewares/multer.js"
import { newProduct ,latesProduct} from "../controllers/productController.js";

const app=express.Router();


app.post("/new",adminOnly,singleUpload,newProduct);

app.get("/latest",latesProduct);

export default app;