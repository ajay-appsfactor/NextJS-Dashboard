import { NextResponse } from "next/server";
import Profile from "@/app/models/Profile";
import dbConnect from "@/app/lib/mongodb";

export async function GET(req){
  try{
    await dbConnect();

    const user = await Profile.find();
    console.log(user)

    if(!user){
      return NextResponse.json({error:"User Not Found"}, { status:400})
    }

    return NextResponse.json({message :" User get successfull", user}, { status:200})
 
  }catch(error){
   console.log(error);
   return NextResponse.json({error :"Internal Server Error"}, {status :500})
  }
}
