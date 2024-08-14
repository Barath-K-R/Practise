import express from 'express'
import {registeruser,loginUser,currentUser} from '../controllers/userController.js'
import validateToken from '../middlewares/validateTokenHandler.js'

const userRouter=express.Router()

userRouter.post('/register',registeruser)

userRouter.post('/login',loginUser)

userRouter.post('/current',validateToken,currentUser)
export default userRouter