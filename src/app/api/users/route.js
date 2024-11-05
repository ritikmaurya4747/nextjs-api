import { NextResponse } from "next/server";
// export async function GET(request){
//     return NextResponse.json({name:"Ritik",age:24,city:"mumbai"},{status:200})
// }

// ------------------------------------------------------------------
import {user} from '@/util/db'
export function GET(req,content){
    console.log(content);
    const data = user;
    return NextResponse.json(data, {status:200});
}
export async function POST(req,res){
    const payload = await req.json();
    // console.log(payload);
    // console.log(payload.name);
    if(!payload.name||!payload.age||!payload.email){
        return NextResponse.json({message:"all fields are required",success:false},{status:404})
    }
    return NextResponse.json({message:"New user created" ,success:true},{status:200})
}