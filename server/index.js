// Express: It's a fast, unopinionated, minimalist web framework for Node.js. 
// It provides a robust set of features to build web applications and APIs.

// Cors (Cross-Origin Resource Sharing): CORS is a security feature that allows or restricts requests from different origins (domains). 
// When building web applications that need to interact with resources from different domains, 
// CORS ensures that browsers can safely make those requests. The cors package for Express provides middleware to enable CORS in your application.

// Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
// It provides a straightforward schema-based solution to model application data. 
// It simplifies interactions with MongoDB by providing features like validation, query building, and hooks.

// Dotenv: Dotenv is a zero-dependency npm package used to load environment variables from a .env file into process.env. 
// It's commonly used to manage configuration settings, API keys, database connection strings, etc., in Node.js applications. 
// This helps keep sensitive information separate from the codebase and makes it easier to manage different configurations across various environments (development, testing, production).

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// express server on port 5000
const app = express();
const port = process.env.PORT || 5000;

// middleware - sending & receiving json
app.use(cors());
app.use(express.json());

// database uri from mongodb 
const uri = process.env.ATLAS_URI;
console.log('URI:', uri);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Additional code or server startup logic here
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

const exercisesRouter = require('./routes/exercises.js');
const usersRouter = require('./routes/users.js');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});