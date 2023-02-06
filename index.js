import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import connect from './config/database_conection.js';
import { router as userRouter } from './routes/Users.Router.js'
console.log(userRouter);

try {
  await connect(process.env.DATABASE_URI);
} catch(err) {
  console.log(err);
}

const app = express();

app.use('/users', userRouter);

app.get('/', (req,res)=>{
  res.send('hola mundo')
})

app.listen(3000, ()=> console.log('estoy escuchando en el puerto 3000'));
