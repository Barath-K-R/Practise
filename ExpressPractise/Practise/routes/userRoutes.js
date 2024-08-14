import express from 'express'

const userRouter=express.Router()

userRouter.get('/',(req,res)=>{
    //sending post request through form 
    res.render('user/new.ejs',{"firstname":"name"})  
    res.send("get all users")
})

userRouter.post('/',(req,res)=>{
     console.log(req.body.firstName)
     res.send('new user creating')
})

//passing dynamic id to get specific user
userRouter.get('/:id',(req,res)=>{
    console.log(req.user)
    res.send(`get a user of id ${req.params.id}`)
})

//router.param method runs when a url has certain parameter which we specify
const users=[{name:"barath"},{name:"arun"}]
userRouter.param('id',(req,res,next,id)=>{
    req.user=users[id]
    next()
})

//custom middleware function
function logger(req,res,next){
   console.log(req.url)
   next()
}


export default userRouter