import connectDB from "@/lib/connectDB";
import company from "@/model/company";
import user from "@/model/user";
import { NextResponse } from "next/server";

//To add new users to the DB
export async function POST(req) {
    try {
        await connectDB();

        const { email, password } = await req.json();
        const User = await user.findOne({ email });
        if (User) return NextResponse.json({ exists: true,message:"User already Exists, try to Login" }, { status: 200 });

        const newUser = new user({ email, password });
        newUser.save();
        return NextResponse.json({ exists: false, id: newUser._id }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }
}

//To update the user details
export async function PUT(req) {
    try {
        await connectDB();

        const { email, name, age, dob, phone, empType, companyId, department, role, userProfile } = await req.json();

        const updatedData = {
            name, age, dob, phone, empType, company: companyId, pic: userProfile
        }
        if (role && department) updatedData.employee = { role, department }
        await user.findOneAndUpdate({ email }, updatedData);
        return NextResponse.json({ message: "updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }

}

//To get the user details
export async function GET(req) {
    try {

    } catch (error) {
        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }

}

//To delete the user details
export async function DELETE(req) {
    try {

    } catch (error) {
        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }

}