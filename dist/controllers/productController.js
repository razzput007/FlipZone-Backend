import { TryCatch } from "../middlewares/error.js";
import { Product } from "../model/productSchema.js";
export const newProduct = TryCatch(async (req, res, next) => {
    const { name, stock, price, category } = req.body;
    const photo = req.file;
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
