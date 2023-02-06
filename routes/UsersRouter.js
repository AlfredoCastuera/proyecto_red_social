import { Router }  from 'express'
import { createUser } from '../controllers/UsersControllers.js';

const router = Router();

router.get('/', (req, res) => res.send('quieres ver a los usuarios'));
router.post('/', createUser);

export { router };