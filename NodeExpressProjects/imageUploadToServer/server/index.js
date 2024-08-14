import express from 'express'
import multer from 'multer'
import cors from 'cors'
const app=express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploadedpics');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); 
    }
  });
  const upload = multer({ storage });
app.post('/',upload.single('file'),(req,res)=>{
    console.log(req.file)
    res.send('file saved')
})
app.listen(5000,()=>{console.log('listening on port 5000')})