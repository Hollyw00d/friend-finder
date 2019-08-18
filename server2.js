// Dependencies
var express = require('express');
var path = require('path');

// Use Express rooter - see:
// https://medium.com/@cmpbilge/routing-with-nodejs-express-4ce79752e146
var router = express.Router();

var rootRoutes = require('./routes/htmlRoutes.js');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Root routes for:
// '/*' and '/survey'
router.use('/', rootRoutes);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
