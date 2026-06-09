import mongoose from "mongoose";

const connectDb = async()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DataBase is connected");
        
    } catch (error) {
        console.log("Error in database connection, ",error);
        
    }
}

export default connectDb;