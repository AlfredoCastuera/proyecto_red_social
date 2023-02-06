import { Router }  from 'express'
import { createPost } from '../controllers/PostController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = Router();

router.post('/', authMiddleware, createPost);

export { router };