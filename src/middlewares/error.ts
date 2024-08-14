import { Request,Response,NextFunction } from "express"
import ErrorHandler from "../utils/utility-class.js";
import { controllerType } from "../types/type.js";

export const errorMiddleware=(err:ErrorHandler,req:Request,res:Response,next:NextFunction)=>{
    err.message=err.message||"";
    err.statusCode=err.statusCode||500;
   return res.status(err.statusCode).json({
     success:false,
     message:err.message
    })
 }

 export const TryCatch=(func:controllerType)=>(req:Request,res:Response,next:NextFunction)=>{
  return Promise.resolve(func(req,res,next)).catch(next);
 } 

 const a=TryCatch();
  