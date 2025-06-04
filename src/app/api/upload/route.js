import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import Profile from "@/app/models/Profile";
import fs from "fs/promises";
import path from "path";

export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const file = formData.get("image");

  if (!name || !email || !file) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const fileName = `${Date.now()}-${Math.round(
    Math.random() * 1e9
  )}${path.extname(file.name)}`;
  console.log(fileName);
  const filePath = path.join(uploadDir, fileName);

  await fs.writeFile(filePath, bytes);

  const baseUrl = process.env.URL || "http://localhost:3000";
  const imageUrl = `${baseUrl}/uploads/${fileName}`;

  // console.log(req.url)

  await dbConnect();
  try {
    const user = await Profile.create({
      name,
      email,
      image: imageUrl,
    });

    return NextResponse.json(
      { message: "User Profile", user },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
