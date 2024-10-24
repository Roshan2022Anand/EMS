import mongoose from "mongoose";

//specific for employee schema
const employeeSchema = new mongoose.Schema({
    role: String,
    Department: String,
    status: String,
    salaryPayout: [{
        amount: Number,
        date: Date,
    }],
    leaveList: [{
        type: String,
        startDate: Date,
        endDate: Date,
        status: String,
    }],
})


//generic schema for both employee and manager
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: String,
    age: Number,
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company"
    },
    empType: {
        type: String,
        enum: ["employee", "manager"],
    },
    dob: Date,
    pic: String,
    phNum: Number,
    employee: employeeSchema,
});

// Export the User model, or use the existing one if it already exists
export default mongoose.models.User || mongoose.model("User", UserSchema);