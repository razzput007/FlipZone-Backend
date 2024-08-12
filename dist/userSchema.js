import mongoose, { Schema } from "mongoose";
const userShema = new Schema({
    _id: {
        type: String,
        required: [true, "Please enter ID"]
    },
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        unique: [true, "Email Already Exist"]
    },
    photo: {
        type: String,
        required: [true, "Please add photo"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please enter Gender"]
    },
    dob: {
        type: Date,
        required: [true, "please enter Date Of Birth"]
    }
}, { timestamps: true });
export const user = mongoose.model("user", userShema);
