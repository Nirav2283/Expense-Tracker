import express from 'express';
import mongoose from 'mongoose';
import productRoute from './product.route.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT;
const URI = process.env.MONGODB_URI;

mongoose.connect(URI , { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connected to Database");
    app.use('/product', productRoute);


    app.listen(port , ()=>{
        console.log("Server started @" ,port);
    })
})
