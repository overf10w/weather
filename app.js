const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database Error: ' + err);
});

const app = express();

const users = require('./routes/users');

// Port number
const port = 3000;

// CORS Middleware
app.use(cors())

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// /users/whatever
app.use('/users', users);

// Index route
app.get('/', (req, res) => {
  res.send('Sample text');
});

// Start server
app.listen(port, () => {
  console.log('Server started on port:' + port);
});
