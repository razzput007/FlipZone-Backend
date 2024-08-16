import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Enter Name"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Price"]
    },
    stock: {
        type: Number,
        required: [true, "Please Enter Stock"]
    },
    photo: {
        type: String,
        required: [true, "Please Enter Image"]
    },
    category: {
        type: String,
        required: [true, "Please Enter Categories"],
        trim: true
    }
}, { timestamps: true });
export const Product = mongoose.model("Product", productSchema);
