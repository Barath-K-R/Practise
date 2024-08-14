import mongoose from 'mongoose'

const refreshTokenSchema=mongoose.Schema({
    refreshToken:{
        type:String,
        required:true
    }
})

export default mongoose.model('refreshToken',refreshTokenSchema)