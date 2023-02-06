import { Router }  from 'express'
import { createUser, getAllUsers, getUserByID } from '../controllers/UsersControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.get('/:id', getUserByID);
router.post('/', createUser);

export { router };