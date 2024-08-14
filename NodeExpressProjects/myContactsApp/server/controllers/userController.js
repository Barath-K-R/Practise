import asynchandler from 'express-async-handler'
import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export const registeruser=asynchandler(async(req,res)=>{
    const {username,email,password}=req.body
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
      }
      const userAvailable = await userModel.findOne({ email });
      if(userAvailable)
      {
        res.status(400)
        throw new Error("user already registered")
      }

      //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
    });
    
    console.log(`User created ${user}`);
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400);
      throw new Error("User data is not valid");
    }
    res.json(user);
})

export const loginUser=asynchandler(async(req,res)=>{
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user=await userModel.findOne({email})
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "30m" }
    );
  
    
    res.status(200).json({ accessToken,user });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
})

export const currentUser=asynchandler(async(req,res)=>{
    res.json(req.user)
})


