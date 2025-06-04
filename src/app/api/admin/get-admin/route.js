import dbConnect from "@/app/lib/mongodb";
import Admin from "@/app/models/Admin";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const admins = await Admin.find().select("-password").sort({ createdAt: -1 });
    console.log(admins);

    return NextResponse.json(
      {
        message: "Get admin data",
        adminData: admins,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
