import mongoose from "mongoose"
const signupschema=new mongoose.Schema({
    name:String,
    email:String,
    text:String
})
export const emailtext = mongoose.models.email||mongoose.model("email",signupschema)