const express = require('express')
const cors = require('cors')

const app=express()
const corOptions={
    origin:'http://localhost:3000'
}
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/Images', express.static('./Images'))

// routers
const router = require('./routes/productRoutes.js')
app.use('/api/products', router)

app.listen(5000,()=>console.log("server listening to 5000"))

app.get('/',(req,res)=>{
    res.send("Request recieved")
})