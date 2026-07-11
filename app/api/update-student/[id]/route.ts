import { connectDB } from "@/lib/mongodb";
import Student from "@/models/Student";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: any
) {

  try {

    await connectDB();

    const { id } = await params;

    const body = await request.json();

    await Student.findByIdAndUpdate(
      id,
      {
        studentName: body.studentName,
        parentName: body.parentName,
        phone: body.phone,
        studentClass: body.studentClass,
        message: body.message,
      }
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }

}