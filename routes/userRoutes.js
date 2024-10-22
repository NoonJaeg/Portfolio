// Creating Routes for User API

import express from 'express';
import { getAllUsers, createUser, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';

const router = express.Router();

// Define routes for each CRUD operation

// GET all users
router.get('/', getAllUsers);

// GET user by ID
router.get('/:id', getUserById);

// POST new user
router.post('/', createUser);

// PUT update user by ID
router.put('/:id', updateUserById);

// DELETE user by ID
router.delete('/:id', deleteUserById);

export default router;
