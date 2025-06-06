import dbConnect from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req, res) {
   const cookieStore = await cookies();
  const { email, password } = await req.json();

  await dbConnect();
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 400 }
      );
    }
     
    const token ="ajay kumar"
    return cookies().set("session", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000), // 7 days
    });

    // return new Response(JSON.stringify({ message: "User login" }), {
    //   status: 201,
    // });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
