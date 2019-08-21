# Friend Finder
## Friend Finder Node and Express Project
### Pseudo Coding
1. Work on Pseudo code for friends score comparison.

2. Do math in API post route (apiRoutes.js) in post route.

3. From front end do $.post and $.ajax from front end.

4. Have a variable called "bestMatch" and write it as an object.

5. Need access to users' scores and data.

6. Use map loop to go over all friends in JSON object. And do another map loop inside to compare scores.

7. Use similar code as below:
````if (totalDifference <= bestMatch.friendDifference) {   
````// Reset the bestMatch to be the new friend.  
````bestMatch.name = currentFriend.name;  
````bestMatch.photo = currentFriend.photo;  
````bestMatch.friendDifference = totalDifference;  
 ````}  