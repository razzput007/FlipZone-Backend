import { TryCatch } from "../middlewares/error.js";
import { Product } from "../model/productSchema.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";
export const newProduct = TryCatch(async (req, res, next) => {
    const { name, stock, price, category } = req.body;
    const photo = req.file;
    if (!photo) {
        return next(new ErrorHandler("Please Add Photo", 400));
    }
    if (!name || !stock || !price || !category) {
        rm(photo.path, () => {
            console.log("Deleted");
        });
        return next(new ErrorHandler("Please Fill All Fields", 400));
    }
    await Product.create({
        name,
        stock,
        price,
        category: category.toLowerCase(),
        photo: photo?.path
    });
    return res.status(201).json({
        success: true,
        message: "Product created successfully"
    });
});
export const latesProduct = TryCatch(async (req, res, next) => {
    const product = await Product.find({}).sort({ createdAt: -1 }).limit(5);
    return res.status(200).json({
        success: true,
        data: product
    });
});
