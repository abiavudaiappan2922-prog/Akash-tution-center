import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Student from "@/models/Student";

export async function POST(req: Request) {

  try {

    await connectDB();

    const body = await req.json();

    const student = await Student.create({

      studentName: body.studentName,

      parentName: body.parentName,

      parentMobile: body.parentMobile,

      alternateMobile: body.alternateMobile,

      address: body.address,

      className: body.className,

      bloodGroup: body.bloodGroup,

      healthIssue: body.healthIssue,

      message: body.message,

    });

    return NextResponse.json({

      success: true,

      student,

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

export async function GET() {

  try {

    await connectDB();

    const students =
      await Student.find().sort({

        createdAt: -1,

      });

    return NextResponse.json(students);

  } catch (error) {

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