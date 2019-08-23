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

        var newFriendScores = newFriend.scores.map(function(score) {
            return parseInt(score);
        });

        var friendsArrObjMatchScore = [];

        friendsArrOfObjects.map(function(currentFriend, index) {
            friendsArrObjMatchScore.push({
                name: currentFriend.name,
                matchScore: Math.abs(newFriendScores[index] - currentFriend.scores[index])
            });
        });    
        
        console.log(friendsArrObjMatchScore);

        friendsArrOfObjects.push(newFriend);
        res.json(friendsArrOfObjects);
    });
}


module.exports = {
    allFriendsRoute,
    addNewFriend
};