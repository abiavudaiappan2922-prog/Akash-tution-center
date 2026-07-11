import { connectDB } from "@/lib/mongodb";
import Student from "@/models/Student";
import { NextResponse } from "next/server";

export async function GET() {

  await connectDB();

  const students = await Student.find().sort({
    createdAt: -1,
  });

  return NextResponse.json({
    students,
  });

}