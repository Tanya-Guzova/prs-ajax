//ready function
$(()=>{
console.log("Ready!")
//for any maintenance, we pass a generic JSON object 
//creating a javaScript object first
let user = {
    //the order of key-value pairs does not matter here, however, keys should match exactly the way they look in a JSON body of postman
    id: 0, userName: "bobbrown2", password: "b1265", firstName:"Bob", lastName:"Brown",
    phoneNumber: "5132987378", email:"bbrown", admin: false, reviewer:true
};
$.ajax({
    //indicate the method 
    method: "POST",
    //indicate the url where to post to
    url:"http://localhost:8080/api/users",
    //pass the data converting a javascript into a true JSON object(where key is quoted)
    data: JSON.stringify(user),
    //indicate the type of content
    contentType: "application/json"

})
 //done is called when the ajex call has beensuccessful
.done(res=>{
    console.log(res);
    getAll();
})
//if ajex call fails
.fail(err=>{
    console.log(err);
})

const getAll = ()=> {
  //start a call to a server, read data from DB and assign all the data to users variable
$.getJSON("http://localhost:8080/api/users").done(users=>{
    console.log(users);
})  
}

console.log("After the getJSON call");
// getAll();
 })