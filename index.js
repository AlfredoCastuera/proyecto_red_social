import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import connect from './config/database_conection.js';
import cors from 'cors'
import { router as userRouter } from './routes/UsersRouter.js'
import { router as authRouter } from './routes/AuthRouter.js'
import { router as postsRouter } from './routes/PostsRouter.js'



try {
  await connect(process.env.DATABASE_URI);
} catch(err) {
  console.log(err);
}

const app = express();

app.use(cors('*'));
app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter)
app.use('/posts', postsRouter)




app.listen(3000, ()=> console.log('estoy escuchando en el puerto 3000'));
