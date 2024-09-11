//link the installed packages

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//Declare the app as an express file
const app = express()

//reference the elements from the .env file in server.js
const port = process.env.PORT || 3000 //4000 = backup

//Connect to MONGODB
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.8my0xqu.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

// Middleware

//enable CORS
app.use(cors())

//serve static files
app.use(express.static('public'))

//parse requests
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//set up EJS
app.set('view engine', 'ejs')

//logic for processing routes & server here

// Add listener
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
