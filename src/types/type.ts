import { NextFunction ,Response,Request} from "express";

export interface NewUserRequestBody{
    name:string;
    email:string;
    photo:string;
    gender:string;
    role:string;
    _id:string;
     dob:Date;
}

export interface newProductRequestBody{
    name:string,
    price:number,
    stock:number,
    category:string
}

export type controllerType= (
    req: Request, 
    res: Response, 
    next: NextFunction) => Promise<void | Response<any, Record<string, any>>>


