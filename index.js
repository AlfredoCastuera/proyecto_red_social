import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import connect from './config/database_conection.js';
import cors from 'cors'
import { router as userRouter } from './routes/UsersRouter.js'


try {
  await connect(process.env.DATABASE_URI);
} catch(err) {
  console.log(err);
}

const app = express();

app.use(cors('*'));
app.use(express.json());

app.use('/users', userRouter);



app.listen(3000, ()=> console.log('estoy escuchando en el puerto 3000'));
