import { Router }  from 'express'
const router = Router();

router.get('/', (req, res) => res.send('quieres ver a los usuarios'));

export { router };