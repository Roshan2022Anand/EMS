import connectDB from "@/lib/connectDB";
import user from "@/model/user";
import { compareSync } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();

        const { email, password } = await req.json();
        const userExist = await user.findOne({ email });
        console.log(password," -> ", userExist.password);
        console.log(compareSync(password, userExist.password));
        if (compareSync(password, userExist.password))
            return NextResponse.json({ exists: true }, { status: 200 });
        else return NextResponse.json({ exists: false }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "internal error +" }, { status: 500 });
    }
}

