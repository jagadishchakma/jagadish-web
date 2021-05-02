////////////////////////////////////
// Application Dependencies
///////////////////////////////////
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const categoryRoute = require('./routes/categoryRoute');
const postRoute = require('./routes/postRoute');



/////////////////////////////////
// Application Configuration
/////////////////////////////////
const app = express();
const port =  process.env.PORT || 4000;
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static('public'));



////////////////////////////////
// Application Database Connect
///////////////////////////////
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.pa04j.mongodb.net/${dbName}?retryWrites=true&w=majority`
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(result => console.log('Database Connected Successfull'))
.catch(error => console.log('Failed To Connect Database'))



/////////////////////////////////
// Application Route
/////////////////////////////////
app.use('/category', categoryRoute);
app.use('/post', postRoute);


/////////////////////////////////
// Application Server Turn On
/////////////////////////////////
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});