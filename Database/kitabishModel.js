import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    username:String,
    password:String,
    email:String,
    mobile:Number,
    interest:String
});

export const User=mongoose.model("user",userSchema)