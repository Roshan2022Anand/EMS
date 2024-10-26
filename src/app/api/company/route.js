import connectDB from "@/lib/connectDB";
import company from "@/model/company";
import { compareSync } from "bcryptjs";
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
export async function PUT(req) {
    try {
        await connectDB();
        const { companyId, id } = await req.json();
        await company.findOneAndUpdate({ _id: companyId }, { $push: { employees: id } })
        return NextResponse.json({ message: "company updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }
}

//To get the company details
export async function GET(req) {
    try {
        await connectDB();
        const { companyName, companyPassword, } = req.query;
        const currCompany = await company.findOne({ companyName });

        if (!currCompany) return NextResponse.json({ message: "company not found", exists: false }, { status: 404 });

        if (compareSync(companyPassword, currCompany.companyPassword))
            return NextResponse.json({ message: "company found", exists: true, id: currCompany._id }, { status: 200 });

        return NextResponse.json({ message: "invalid password", exists: false }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }
}