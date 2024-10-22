// Question 3b: Creating Mongoose Model for Contacts

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
