import express from 'express'
import {getAllContacts,createContact,getContact,updateContact,deletecontact} from '../controllers/contactController.js'
import validateToken from '../middlewares/validateTokenHandler.js'
const contactrouter=express.Router()

contactrouter.use(validateToken)
contactrouter.route('/').get(getAllContacts).post(createContact)

contactrouter.route('/:id').get(getContact).put(updateContact).delete(deletecontact)

export default contactrouter