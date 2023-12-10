import mongoose, { Schema } from "mongoose";

const bookSchema=new Schema({
    name:String,
    author:String,
    genre:String,
    image:String
});

export const Book=mongoose.model("book",bookSchema)