// Question 3d: Creating Routes for Contact API

import express from 'express';
import { getAllContacts, createContact, getContactById, updateContactById, deleteContactById } from '../controllers/contactController.js';

const router = express.Router();

// Define routes for each CRUD operation

// GET all contacts
router.get('/', getAllContacts);

// GET contact by ID
router.get('/:id', getContactById);

// POST new contact
router.post('/', createContact);

// PUT update contact by ID
router.put('/:id', updateContactById);

// DELETE contact by ID
router.delete('/:id', deleteContactById);

export default router;
