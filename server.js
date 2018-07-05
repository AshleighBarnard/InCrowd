const express = require('express');

const app = express();

//route to get up and running
app.get('/', (req, res) => res.send('Hello World'));

//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on Port ${port}`));