import mongoose, { Schema } from "mongoose";
import validator from 'validator';
const userSchema = new Schema({
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
        unique: [true, "Email Already Exist"],
        validate: validator.default.isEmail
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
userSchema.virtual("age").get(function () {
    const today = new Date();
    const birthDate = new Date(this.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
});
export const User = mongoose.model("User", userSchema);
