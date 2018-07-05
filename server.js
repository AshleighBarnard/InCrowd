const express = require('express');
const mongoose = require('mongoose');
const app = express();


//DB config
const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch((err => console.log('Mongo Error')));

//route to get up and running
app.get('/', (req, res) => res.send('Hello World'));

//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on Port ${port}`));