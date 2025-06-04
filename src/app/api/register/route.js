import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
  const { name, email, password } = await req.json();

  await dbConnect();
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    const hassedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hassedPassword });

    await user.save();

    return new Response(JSON.stringify({ message: "User registered" }), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
