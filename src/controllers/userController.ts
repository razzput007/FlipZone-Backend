import { NextFunction,Request,Response } from "express";
import { User } from "../model/userSchema.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "../middlewares/error.js";

export const newUser=TryCatch(
    async(req:Request,res:Response,next:NextFunction)=>{
            const {name,email,photo,gender,role,_id,dob}=req.body;
            let user=await User.findById(_id);
            if(user){
                return res.status(200).json({
                success:true,
                message:`Welcome,${user.name}`
                })
            }
            if(!_id || !name || !email || !photo || !gender || !dob ){
                 return next(new ErrorHandler("please add All Feld",400));
            }
             user=await User.create({
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

export const getAllUser=TryCatch(
  async(req,res,next)=>{
   const users=await User.find({});
   return res.status(200).json({
    status:"success",
    data:users
    })
  }
)

export const getUser=TryCatch(async(req,res,next)=>{
    const id=req.params.id;
    const user=await User.findById(id);
    if(!user){
        return next(new ErrorHandler("User not found",404))
    }

    return res.status(200).json({
        success:true,
        data:user
    })
})


export const deleteUser=TryCatch(async(req,res,next)=>{
  const id=req.params.id;
  const user=await User.findById(id);
  if(!user){
    return next(new ErrorHandler("User not found",404));
  }
  await user.deleteOne();

  return res.status(200).json({
    status:"success",
    message:"Deleted Successfully"
  })
})