import asyncHandler from 'express-async-handler'
import contactModel from '../models/contactModel.js'
export const getAllContacts=asyncHandler(async(req,res)=>{
    const contacts=await contactModel.find({ user_id: req.user.id })
    res.status(200).send(contacts)
})

export const createContact=asyncHandler((req,res)=>{
   
    console.log("The request body is :", req.body);
    const {name,email,phone,img}=req.body
    if(!name  || !email || !phone ||!img)
    {
        res.status(400)
        throw new Error("all fields are mandatory")
    }

    const contact=new contactModel({
        name:name,
        email:email,
        phone:phone,
        img:img,
        user_id: req.user.id,
    })

    const savedcontact=contact.save();
    res.status(200).send(savedcontact)
})

export const getContact=asyncHandler(async(req,res)=>{
    const contact=await contactModel.findById(req.params.id)
    if(contact)
    res.status(200).send(contact)
    else{
        res.status(400)
        throw new Error('contact not found')
    }
})

export const updateContact=asyncHandler(async(req,res)=>{
    const contact=await contactModel.findById(req.params.id)
    if(!contact)
    {
        res.status(400);
        throw new Error("contact not found")
    }
    console.log(contact.user_id.toString()+" "+req.user.id)
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
      }
    console.log("coming")
    const updatedcontact=await contactModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(201).send(updatedcontact)
})

export const deletecontact=asyncHandler(async(req,res)=>{
    console.log("deleting controller")
    const contact=await contactModel.findById(req.params.id)
    if(!contact)
    {
        res.status(400);
        throw new Error("contact not found")
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
      }
      
    await contactModel.findByIdAndDelete( req.params.id)
    res.status(201).send("deleted")
})

