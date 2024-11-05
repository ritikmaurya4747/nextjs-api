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