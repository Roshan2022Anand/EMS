import connectDB from "@/lib/connectDB";
import company from "@/model/company";
import { NextResponse } from "next/server";

//To get the company details
export async function GET(req) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const companyName = searchParams.get('companyName');
        const companyPassword = searchParams.get('companyPassword');

        const currCompany = await company.findOne({ companyName });

        if (!currCompany) return NextResponse.json({ message: "company not found", exists: false }, { status: 200 });

        if (compareSync(companyPassword, currCompany.companyPassword))
            return NextResponse.json({ message: "company found", exists: true, id: currCompany._id }, { status: 200 });

        return NextResponse.json({ message: "invalid password", exists: false }, { status: 200 });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "internal error" }, { status: 500 });
    }
}