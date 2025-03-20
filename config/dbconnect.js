import mongoose from "mongoose";
import dotenv  from "dotenv";
dotenv.config();
const mongoUrl = process.env.MONGODB_URL;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MongoDB connected");
        
    } catch (error) {
        console.error('error connecting to MongoDB',error.messsage);
        process.exit(1);
    }
    
}

export default connectDB;
