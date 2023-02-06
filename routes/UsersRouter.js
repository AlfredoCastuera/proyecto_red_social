import { Router }  from 'express'
import { createUser, getAllUsers, getUserByID } from '../controllers/UsersControllers.js';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserByID);
router.post('/', createUser);

export { router };