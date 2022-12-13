import express from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'
import dotenv from "dotenv";
import userRouter from './routes/userRouter.js'

dotenv.config()

const app = express();
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded())


// view engine
app.set('view engine', 'hbs');
// mongoose.connect(process.env.DATABASE).then(() => {
  app.listen(5000, () =>
    console.log(`server running on port : ${process.env.PORT}`)
  );
// });


app.use(userRouter)
