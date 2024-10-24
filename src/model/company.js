import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName: {
        required: true,
        type: String,
        unique: true,
    },
    companyPassword: {
        required: true,
        type: String,
    },
    companyAddress: String,
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
})

export default mongoose.models.company || mongoose.model("company", companySchema);