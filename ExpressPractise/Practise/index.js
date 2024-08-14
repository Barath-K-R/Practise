import express from 'express'
import userRouter from './routes/userRoutes.js'
import postRouter from './routes/postROutes.js'
const app=express()

//middleware for parsing data from req body
app.use(express.urlencoded({extended:true}))
//serving static html files using express static middleware
app.use(express.static('public'))

app.set('view engine','ejs')

app.listen(3000,()=>{
    console.log('server listening to port 3000')
})

//rendering html files using ejs view engine
app.get('/',(req,res)=>{
    res.render('index.ejs',{text:"Barath"})
})
 
app.use('/user',userRouter)
app.use('/post',postRouter)