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

export async function POST() {
  await dbConnect();
  try {
    const product = new Product({
      name: "Redmi 10",
      price: 30000,
      color: "red",
      company: "Samsung",
      category: "mobile",
    });
    const result = await product.save();
    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error saving product:", error);
    return NextResponse.json({ message: "Server Error", success: false }, { status: 500 });
  }
}
