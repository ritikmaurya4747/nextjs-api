import { NextResponse } from "next/server";

export function GET(req, context) {
  const studentURL = context.params.student;
  console.log(studentURL);

  return NextResponse.json({ message: studentURL }, { status: 200 });
}
