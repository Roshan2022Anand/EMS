import connectDB from "@/lib/connectDB";
import user from "@/model/user";
import { NextResponse } from "next/server";


//To get all the employees details form the company
export async function GET(req) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const empArr = JSON.parse(searchParams.get('empArr'));

        const allEmp = await user.find({ _id: { $in: empArr } })

        return NextResponse.json({ allEmp }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}

//To update the employee details
export async function PUT(req) {
    try {
        await connectDB();

        const { emp } = await req.json();
        const updated = await user.findByIdAndUpdate(emp._id, emp,
            { new: true } // This option returns the updated document
        );

        if (!updated) {
            return NextResponse.json(
                { message: "Employee not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { message: "Employee updated successfully", employee: updated },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}