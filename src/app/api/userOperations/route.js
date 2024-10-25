import connectDB from "@/lib/connectDB";
import user from "@/model/user";
import { NextResponse } from "next/server";

//To add new users to the DB
export async function POST(req) {
    try {
        await connectDB();

        const { email, password } = await req.json();
        console.log(email, password);
        const User = await user.findOne({ email });
        if (User)
            return NextResponse.json({ exists: true }, { status: 200 });

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

        const { email, name, age, dob, phone, empType, companyId, imgFile } = await req.json();

        await user.findOneAndUpdate({ email }, { name, age, dob, phone, empType, company: companyId, pic: JSON.stringify(imgFile) });
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