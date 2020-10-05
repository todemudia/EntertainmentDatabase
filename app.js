const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

/***********  Initial Setup *************/
const port = process.env.PORT || 3001;

/**** Middleware Config ****/
const app = express();
app.use(cors());
app.use(express.json())

/********** Mongoose Setup  ************/
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true 
});
/*********** Connect to DB  **************/
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully")
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})