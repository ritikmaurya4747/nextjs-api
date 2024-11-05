import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = []
  try {
    await mongoose.connect(connectionSrt);
    const data = await Product.find();
    console.log(data);
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "Server Error" });
  }
  return NextResponse.json({ message: data });
}
