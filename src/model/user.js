import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: String,
    role: String,
    dob: Date,
    age: Number,
    Department: String,
    empType: String,
    phNum: Number,
    pic:String,
});

// Export the User model, or use the existing one if it already exists
export default mongoose.models.User || mongoose.model("User", UserSchema);