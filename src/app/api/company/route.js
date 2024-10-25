import connectDB from "@/lib/connectDB";
import company from "@/model/company";
import { NextResponse } from "next/server";

//To add new company to the DB
export async function POST(req) {
    try {
        await connectDB();
        const { companyName, companyPassword, id } = await req.json();
        const newCompany = new company({ companyName, companyPassword, manager: id });
        newCompany.save();
        return NextResponse.json({ message: "new company added", id: newCompany._id }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }
}

//To update the company details
export async function PUT(req) {}