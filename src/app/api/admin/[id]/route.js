import dbConnect from "@/app/lib/mongodb";
import Admin from "@/app/models/Admin";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const { id } = await params;
    console.log(id)

    const oneAdmin = await Admin.findOne({ _id: id }).select("-password");

    if (!oneAdmin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Get single admin data",
        adminData: oneAdmin,
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

export async function PUT(req, { params }) {
  await dbConnect();
  try {
    const { id } = await params;
    const body = await req.json();
    console.log(body);

    const updateAdmin = await Admin.findByIdAndUpdate(id, body, { new: true });
    if (!updateAdmin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    console.log(updateAdmin);

    return NextResponse.json(
      { message: "Admin Update Successful", admin: updateAdmin },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro updating admin ", error);
    return NextResponse.json(
      { error: "Failed to update admin" },
      { status: 500 }
    );
  }
}

// Delete Admin

export async function DELETE(req, { params }) {
  await dbConnect();
  try {
    const { id } = await params;
    const deleteAdmin = await Admin.findByIdAndDelete(id);

    console.log(deleteAdmin);
    if (!deleteAdmin) {
      return NextResponse.json({ error: "Admin not found", status: 400 });
    }

    return NextResponse.json(
      { message: "Admin Delete Successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete admin", error);
  }
}
