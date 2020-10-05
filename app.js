import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import config from './config';


/**** Routes ****/

/**** Middleware Config ****/
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

/************** DB Config *****************/
const {MONGO_URI, MONGO_DB_NAME } = config;
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

/*********** Connect to DB  **************/
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

/*** Serve Static assets if in prodction ***/
if (process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

export default app;