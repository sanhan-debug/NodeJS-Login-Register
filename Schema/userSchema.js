import { Schema,model } from "mongoose";


 const userSchema = new Schema({
    username:String,
    email:String,
    password:String
},{versionKey:false})


export const userModel = model("users",userSchema)