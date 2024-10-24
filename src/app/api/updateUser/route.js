import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";


export async function post(req) {
    try {
        await connectDB();

        const { email } = await req.json();
        return NextResponse.json({ message: "User data updated successfully" }, 200)
    } catch (error) {
        return NextResponse.json({ message: error.message }, 500)
    }
}