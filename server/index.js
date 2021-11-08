import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());
app.use('/posts',postRoutes);

const CONNEVTION_URL = "mongodb+srv://denoriaaa:SQ3No7zNIIwTmSBI@cluster0.hnuu7.mongodb.net/Thesis_RESTful?retryWrites=true&w=majority";
const PORT =  process.env.PORT || 5000;

mongoose.connect(CONNEVTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT,()=>console.log(`Server unning om port: ${PORT}`)))
    .catch((error)=>console.log(error.message));

