import express from 'express'

const postRouter=express.Router()

postRouter.get('/',(req,res)=>{
    res.send("post get")
})

postRouter.post('/',(req,res)=>{
    res.send('post creating')
})

//for chaining routes (same endpoints but different http methods)
postRouter.route('/:id').get((req,res)=>{
    res.send(`getting user ${req.params.id}`)
}).post((req,res)=>{
    res.send(`creating user ${req.params.id}`)
}).put((req,res)=>{
    res.send(`updating user ${req.params.id}`)
})





export default postRouter