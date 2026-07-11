import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Fees from "@/models/Fees";

export async function GET() {

  try {

    await connectDB();

    const data =
      await Fees.find();

    return NextResponse.json(data);

  } catch (error) {

    return NextResponse.json([]);

  }

}