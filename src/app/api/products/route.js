import { dbConnect } from "@/lib/db";
import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const data = await Product.find();
    return NextResponse.json({ message: data, success: true });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Server Error", success: false }, { status: 500 });
  }
}

export async function POST(req) {
  await dbConnect();
  try {
    const payload = await req.json();
    const product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error saving product:", error);
    return NextResponse.json({ message: "Server Error", success: false }, { status: 500 });
  }
}
