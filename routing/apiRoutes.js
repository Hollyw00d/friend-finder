// GET survey of friends API route
// (/api/friends)
function allFriendsRoute(router, friendsArrOfObjects) {
    router.get('/api/friends', function(req, res) { 
        res.json(friendsArrOfObjects);
    });
}

// POST survey of friends API route (/api/friends)
// to add new friend to array of objects
function addNewFriend(router, friendsArrOfObjects) {
    router.post('/api/friends', function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        friendsArrOfObjects.push(newFriend);
        res.json(friendsArrOfObjects);
    });
}


module.exports = {
    allFriendsRoute,
    addNewFriend
};