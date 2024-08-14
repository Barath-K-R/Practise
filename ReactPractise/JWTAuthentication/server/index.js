import express from 'express'
import jwt, { decode } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cors from 'cors'
import userModel from './models/userModel.js';
import refreshTokenModel from './models/refreshTokenModel.js';
import { connectDb } from './dbCOnnection.js';



const app = express();
connectDb()
app.use(express.json());
app.use(cors())


const verify = async (req, res, next) => {
   
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    try {
        if (authHeader) {
            const token = authHeader.split(" ")[1];
            console.log(token);
            jwt.verify(token, "mySecretKey", (err, decodeduser) => {
                if (err) {
                    return res.status(401).send("Token is not valid");
                }
                console.log(decodeduser)
                req.user = decodeduser;
                next();
            });
        } else {
            return res.status(401).json("You are not authenticated");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const generateAccessToken = (user) => {
    return jwt.sign({userId:user._id.toString(),username:user.username},"mySecretKey",{expiresIn:"5s"})
  };
  
  const generateRefreshToken = (user) => {
    return jwt.sign({userId:user._id.toString(),username:user.username},"myRefreshSecretKey",{expiresIn:"10s"})
  };

app.post('/api/refresh',async(req,res)=>{
    console.log('refresh')
    const refreshtoken=req.body.token
    console.log(refreshtoken)
    try {
        if(!refreshtoken){
            res.status(401).json("you are not authenticated")
        }
        jwt.verify(refreshtoken,"myRefreshSecretKey",(err,user)=>{
            if(err){
                console.log('refresh token is not valid')
                return res.status(401).json("refresh token is not valid");
            }
            const id=user.userId
            delete user.userId;
            user._id=id;
            
            const newAccessToken=generateAccessToken(user)
            res.json({
                accessToken:newAccessToken,
            })

        })
    } catch (error) {
        console.log(error)
    }
    
})

app.post("/api/login", async(req, res) => {
  const { username, password } = req.body;
  console.log(password)
  try {
    const user=await userModel.findOne({
        username
    })
    if(user){
        const passwordmatch=await bcrypt.compare(password,user.password)

    if (passwordmatch) {
      const accessToken=generateAccessToken(user);
      const refreshToken= generateRefreshToken(user)
      const token=new refreshTokenModel({
        refreshToken
      })
        token.save()
         res.status(200).json({
           user:user,
           accessToken:accessToken,
           refreshToken:refreshToken
         })
      } else {
      res.status(400).json("Username or password incorrect!");
    }
    }
    else{
        res.status(404).json("user not found");
    }
    
  } catch (error) {
    console.log(error)
  }
 
});

app.post('/api/signup',async(req,res)=>{
    console.log('signin up')
    const {username,password}=req.body

    try {
        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(password,salt)
        const user=await userModel.findOne({username})
        if(user){
            res.status(400).json("user already registered")
        }
        else{
            const newUser=new userModel({
                username:username,
                password:hashedpassword
            })
            await newUser.save()
            res.json("user successfully registered")
        }
    } catch (error) {
        console.log(error)
    }
})

app.post('/api/logout',verify,async(req,res)=>{
    console.log('loginout')
    try {
        await refreshTokenModel.deleteMany({})
        res.status(200).json("you have successfully logged out")
    } catch (error) {
        console.log(error)
    }
   
})

app.delete('/api/user/:id',verify,async(req,res)=>{
    console.log('deleting user')
    try {
        if(req.user.userId===req.params.id){
            const deleteduser=await userModel.findByIdAndDelete(req.user.userId)
            res.json("user deleted successfully")
       }
       else{
        res.status(403).json('you are not allowed to perform this action')
       }
    } catch (error) {
        console.log(error)
    }
   
})


app.listen(5000, () => console.log("Backend server is running!"));