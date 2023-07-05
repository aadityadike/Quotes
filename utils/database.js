import mongoose, { mongo } from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true) // set the mongoose options

    if (!isConnected) {
        console.log("MongoDB is already connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_quotes",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log("MongoDB is Connected Now")
    } catch (error) {
        console.log(error)
    }

}