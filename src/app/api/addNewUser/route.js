import connectDB from "@/lib/connectDB";
import user from "@/model/user";
import { NextResponse } from "next/server";

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
        return NextResponse.json({ exists: false }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }
}
