import { TryCatch } from "./error.js";
import { User } from "../model/userSchema.js";
import ErrorHandler from "../utils/utility-class.js";
export const adminOnly = TryCatch(async (req, res, next) => {
    const id = req.query.id;
    if (!id) {
        return next(new ErrorHandler("Please Login In", 401));
    }
    const user = await User.findById(id);
    if (!user) {
        return next(new ErrorHandler("Inavlid Id", 401));
    }
    if (user.role !== "admin") {
        return next(new ErrorHandler("Invalid Role", 401));
    }
    next();
});
