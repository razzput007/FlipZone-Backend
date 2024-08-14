import { NextFunction,Request,Response } from "express";
import { User } from "../model/userSchema.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "../middlewares/error.js";

export const newUser=TryCatch(
    async(req:Request,res:Response,next:NextFunction)=>{
            const {name,email,photo,gender,role,_id,dob}=req.body;
            console.log(name,email,photo,gender,role,_id,dob);
            const user=await User.create({
                name,
                email,
                photo,
                role,
                gender,
                _id,
                dob : new Date(dob)
            });
           return res.status(200).json({
                status:"success",
                message:`Welcome ${user.name}`
            })
    }
)