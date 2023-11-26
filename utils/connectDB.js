import mongoose from "mongoose";

export default async function connectDB() {
    if(mongoose.connection.readyState) return console.log("Already Connected");
    await mongoose.connect(process.env.DB_URL)
    console.log("Connect to DB")
}
