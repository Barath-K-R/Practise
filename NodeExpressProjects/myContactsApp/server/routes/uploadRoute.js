import express from 'express'
import multer from 'multer'
const uploadRouter=express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); 
    }
  });
  const upload = multer({ storage });

  uploadRouter.post('/',upload.single("file"),(req,res)=>{
    console.log(req.file)
    res.send("file uploaded successfully")
  })

  export default uploadRouter
