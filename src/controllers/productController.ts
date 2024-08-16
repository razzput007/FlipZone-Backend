import { NextFunction,Request,Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { newProductRequestBody } from "../types/type.js";
import { Product } from "../model/productSchema.js";


export const newProduct=TryCatch(async(req:Request<{},{},newProductRequestBody>,res:Response,next:NextFunction)=>{
 const {name,stock,price,category}=req.body;
 const photo=req.file;

 await Product.create({
   name,
   stock,
   price,
   category:category.toLowerCase(),
   photo:photo?.path
 });

 return res.status(201).json({
    success:true,
    message:"Product created successfully"
 })
})