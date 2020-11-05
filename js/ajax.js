//ready function
$(()=>{
console.log("Ready!")
//start a call to a server //and read data from DB
$.getJSON("http://localhost:8080/api/users").done(users=>{
    console.log(users);
})
console.log("After the getJSON call");
 })