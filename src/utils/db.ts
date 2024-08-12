import mongoose from "mongoose";


export const connectionDB=async()=>{
    try {
        const url='mongodb://localhost:27017/FlipZone'
    const conn= await mongoose.connect(url,{
        dbName:"FipZone"
    })
    console.log(`Database is Connected : ${conn.connection.host}`)

    } catch (error) {
        console.error(error);
    }
}