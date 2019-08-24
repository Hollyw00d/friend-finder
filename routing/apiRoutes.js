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

        friendsArrOfObjects.map(function(currentFriend) {
            var friendMatchValue = currentFriend.scores.reduce(function(acc, val, index) {
                 return Math.abs(val - newFriendScores[index]) + acc;
            });

            var currentFriendName = currentFriend.name;
            var currentFriendPhoto = currentFriend.photo;

            friendsArrObjMatchScore.push([
                friendMatchValue, {
                    currentFriendName,
                    currentFriendPhoto
                }
            ]);
        });
        

        var friendsArrObjMatchScoreSorted = friendsArrObjMatchScore.sort(function(a, b) {
            return a[0] - b[0];
        });

        var chosenFriend = friendsArrObjMatchScoreSorted[0];

        // console.log(chosenFriend[1].currentFriendName);

        // console.log(chosenFriend[1].currentFriendPhoto);

        newFriend.newFriend = {
            chosenFriendName: chosenFriend[1].currentFriendName,
            chosenFriendPhoto: chosenFriend[1].currentFriendPhoto
        };


        friendsArrOfObjects.push(newFriend);
        res.json(friendsArrOfObjects);
    });
}


module.exports = {
    allFriendsRoute,
    addNewFriend
};