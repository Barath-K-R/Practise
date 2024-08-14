import mongoose from "mongoose";

const contactSchema=mongoose.Schema({
  
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone number"],
    },
    img:{
      type:String,
      required:[true ,"please upload the profile image"],
    },
  },
  {
    timestamps: true,
  })

export default mongoose.model('contacts',contactSchema)