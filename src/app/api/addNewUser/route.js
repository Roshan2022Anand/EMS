import connectDB from "@/lib/connectDB";
import user from "@/model/user";
import { compareSync } from "bcryptjs";
import { NextResponse } from "next/server";

//to add new users
export default async function POST(req) {
    try {
        await connectDB();

        const { email, password } = req.body;

        if (user.findOne({ email }))
            return NextResponse.status(400).json({ message: 'User already exist', exists: true });

        const newUser = new user({ email, password });
        newUser.save();
        return NextResponse.status(200).json({ message: "User created successfully", exists: false });
    } catch (error) {
        return NextResponse.status(500).json({ message: 'Internal server error', error });
    }
}

//to check if user already exist
export default async function GET(req) {
    try {
        await connectDB();
        const { email, password } = req.params;

        const userExist = await user.findOne({ email });
        if (compareSync(password, userExist.password))
            return NextResponse.status(200).json({ message: 'User exist', exists: true });
        else return NextResponse.status(400).json({ message: 'User does not exist', exists: false });
    } catch (error) {
        return NextResponse.status(500).json({ message: 'Internal server error', error });
    }
}