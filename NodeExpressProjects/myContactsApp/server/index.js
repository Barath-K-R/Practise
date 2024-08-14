import express from 'express'
import dotenv from 'dotenv'
import contactrouter from './routes/contactRoutes.js'
import errorHandler from './middlewares/errorHandler.js'
import {connectDb} from './config/dbConnection.js'
import userRouter from './routes/userRoute.js'
import uploadRouter from './routes/uploadRoute.js'
import cors from 'cors'

connectDb()
const app=express()
dotenv.config()

const port=process.env.PORT;

// to serve images inside public folder
app.use(express.static('public/images')); 

app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE","PUT"]
})) 
app.use(express.json());
app.use(errorHandler);


app.use('/api/contacts',contactrouter);
app.use('/api/users',userRouter);
app.use('/api/upload',uploadRouter)


app.listen(port,()=>{
    console.log(`server listening on ${process.env.PORT}`)
})

