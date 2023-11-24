import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Quiz_App')
    console.log("Database Connected")
}