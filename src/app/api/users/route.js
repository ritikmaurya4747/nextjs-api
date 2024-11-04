import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({name:"Ritik",age:24,city:"mumbai"},{status:200})
}