import dbConnect from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    console.log(users);

    return NextResponse.json(
      {
        message: "Get admin data",
        userData: users,
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
