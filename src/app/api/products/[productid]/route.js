import { dbConnect } from "@/lib/db";
import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";

export async function PUT(req,res){
    const productId = res.params.productid;
    const filter = {_id:productId}
    const payload = await req.json();
    console.log(payload);
    
    await dbConnect();
    const result = await Product.findOneAndUpdate(filter, payload);
    return NextResponse.json({result,success: true})
}