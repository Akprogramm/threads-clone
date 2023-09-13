
import mongoose from "mongoose"

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL) return console.log("MONGOOSE_URL not found");

    if(isConnected) return console.log("Already connected to MongoDB");

    try{
      await mongoose.connect(process.env.MONGODB_URL); 

      isConnected = true;

      console.log("Connnected to MongoDB");

    }
    catch (error){
      console.log("can't connect to mongoose");
      console.log("Error is ",error);
    }

}


