import mongoose from "mongoose"

export async function connectDb() {
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("mongodb connected");
    }catch(e) {
        console.log("MongoDB error:", e);
    } 
}