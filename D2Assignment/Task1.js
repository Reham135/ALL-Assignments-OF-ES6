var userContainer = document.getElementById('user-container');// to contain buttons
var postList = document.getElementById('postList');         // ul to contain li

async function getUserData() {
    var userresult = await fetch('https://jsonplaceholder.typicode.com/users');        //fetch return json data
    var data = await userresult.json();             //.json  to convert it to js
    //console.log(data);
    return data;                                     //js data
}
async function displayUsers() {  
    var users = await getUserData();                //displayUsers function calls getUserData() and awaits the response before looping through the array of user objects               
    users.forEach(function (user) {                 //loop through the array of user objects     
        var userButton = document.createElement('button');        // create a button for each user
        userButton.textContent = user.name;
        userButton.addEventListener("click", function () {
            userButton.style.backgroundColor = "red";
        });
        userButton.addEventListener("blur", function () {
            userButton.style.backgroundColor = "";
        });

        userButton.addEventListener('click', async function () {
            var response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            var data = await response.json();
            //console.log(data);
            var postTitles = data.map(function (post) { return post.title });      //get an array contain titles of the resulting posts using the map method.  
            //console.log(postTitles);
            postList.innerHTML = '';                                     //to clear the <ul> before click evert time
            postTitles.forEach(function (title) {
                var listItem = document.createElement('li');
                listItem.textContent = title;
                postList.appendChild(listItem)
            });
        });
        userContainer.appendChild(userButton);
    });
}
displayUsers();
