import connectDB from "@/lib/connectDB";
import user from "@/model/user";
import { compareSync } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();

        const { email, password } = await req.json();
        const userExist = await user.findOne({ email });
        if (!userExist) return NextResponse.json({ exists: false, message: "User does not exists" }, { status: 200 });
        console.log(compareSync(password, userExist.password));
        if (compareSync(password, userExist.password))
            return NextResponse.json({ exists: true, message: "User Found" }, { status: 200 });

        return NextResponse.json({ exists: false, message: "Wrong Credentials" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }
}

