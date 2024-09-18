import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connect } from "./address";
import { emailtext } from "./find";
export async function POST(req){
	const {name,email,text} = await req.json();
	await mongoose.connect(connect)
	const emailmessage=await new emailtext({name,email,text});
	const result=await emailmessage.save();
	return NextResponse.json({success:true});
	
}
