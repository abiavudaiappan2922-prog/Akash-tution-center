import connectDB from "@/lib/mongodb";
import Student from "@/models/Student";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: any
) {

  try {

    await connectDB();

    const { id } = await params;

    await Student.findByIdAndDelete(id);

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