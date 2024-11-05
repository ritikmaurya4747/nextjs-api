import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req, content) {
  const userData = user.filter((item) => item.id == content.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(req, res){
  let payload = await req.json();
  payload.id=res.params.id;
  console.log(payload);
  if(!payload.id || !payload.name || !payload.age || !payload.email){
    return NextResponse.json({message:"all fields are required to update",success:false},{status:401});
  } 
  return NextResponse.json({message:payload,success:true},{status:200});
  
}