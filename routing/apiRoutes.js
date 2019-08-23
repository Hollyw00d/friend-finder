// Survey of friends API route
// (/api/friends)
function allFriendsRoute(router, path) {
    router.get('/api/friends', function(req, res) {
        //res.sendFile(path.join(process.cwd() + '/app/public', 'home.html'));  
        res.sendFile(path.join(process.cwd() + '/app/data', 'friends.js'));
    });
}

module.exports = {
    allFriendsRoute
};