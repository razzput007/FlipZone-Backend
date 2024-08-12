import { User } from "../model/userSchema.js";
import ErrorHandler from "../utils/utility-class.js";
export const newUser = async (req, res, next) => {
    try {
        return next(new ErrorHandler("Error in User Controller", 400));
        const { name, email, photo, gender, role, _id, dob } = req.body;
        console.log(name, email, photo, gender, role, _id, dob);
        const user = await User.create({
            name,
            email,
            photo,
            role,
            gender,
            _id,
            dob: new Date(dob)
        });
        return res.status(200).json({
            status: "success",
            message: `Welcome ${user.name}`
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error
        });
    }
};
