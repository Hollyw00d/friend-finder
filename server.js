// Dependencies
var express = require('express');
var path = require('path');


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get an instance of router
var router = express.Router();

// Grabs module.exports for HTML routes
var htmlRoutes = require('./routing/htmlRoutes');
// Home page (/) route
htmlRoutes.homePageRoute(router, path);
// Survey page (/survey) route
htmlRoutes.surveyPageRoute(router, path);

// Get all friends array of objects
var allFriends = require('./app/data/friends')

var apiRoutes = require('./routing/apiRoutes');
// GET all friends (/api/friends)
apiRoutes.allFriendsRoute(router, allFriends);
// POST new friend to (/api/friends)
apiRoutes.addNewFriend(router, allFriends);

// apply the routes to our application
app.use('/', router);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
