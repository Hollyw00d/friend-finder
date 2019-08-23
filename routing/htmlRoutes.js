// Home page route (/)
function homePageRoute(router, path) {
    router.get('/', function(req, res) {
        res.sendFile(path.join(process.cwd() + '/app/public', 'home.html'));  
    });    
}

// Survey page route (/survey)
function surveyPageRoute(router, path) {
    router.get('/survey', function(req, res) {
        res.send('Survey page!');  
    });  
}

module.exports = {
    homePageRoute,
    surveyPageRoute
};