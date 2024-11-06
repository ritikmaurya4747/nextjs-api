import { NextResponse } from "next/server";
import { writeFile } from "fs/promises"; // Import writeFile from fs/promises

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json(
      { message: "No image found", success: false },
      { status: 400 }
    );
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData); // Corrected from "Buffer.form" to "Buffer.from"
  const path = `./public/${file.name}`; // Wrapped the path in quotes

  await writeFile(path, buffer);
  return NextResponse.json({
    message: "File uploaded successfully",
    success: true,
  });
}
