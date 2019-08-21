var express = require('express');

// Home page route
function homePageRoute(router) {
    router.get('/', function(req, res) {
        res.send('Home page!');  
    });    
}

// Survey page route
function surveyPageRoute(router) {
        router.get('/survey', function(req, res) {
            res.send('Survey page!');  
        });  
}

module.exports = {
    homePageRoute,
    surveyPageRoute
};