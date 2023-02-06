import { Router }  from 'express'
import { getAllPost, getPostBySlug, createPost, updatePostById , deletePostById, upvotePost } from '../controllers/PostController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = Router();

router.get('/', getAllPost);
// router.get('/favorites', authMiddleware, getFavoritesPost)
router.get('/:slug', getPostBySlug);
router.post('/', authMiddleware, createPost);
router.patch('/:id', authMiddleware, updatePostById);
router.delete('/:id', authMiddleware, deletePostById);
router.patch('/upvote/:id', authMiddleware, upvotePost);

export { router };