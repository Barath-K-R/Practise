import mongoose from 'mongoose'

export const connectDb=async()=>{
    try {
        const connection=mongoose.connect('mongodb://localhost:27017')
        console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
    }
    
}