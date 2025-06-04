import dbConnect from "@/app/lib/mongodb";
import Admin from "@/app/models/Admin";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  try {
    const { name, email, phone, address } = await req.json();
    console.log(name, email, phone, address);

    const admin = new Admin({ name, email, phone, address });

    await admin.save();

    return NextResponse.json({ message: "Admin Added Successfully" , admin }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
