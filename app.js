const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

// Port number
const port = 3000;

// CORS Middleware
app.use(cors())

// Body Parser Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Sample text');
});

app.listen(port, () => {
  console.log('Server started on port:' + port);
});
