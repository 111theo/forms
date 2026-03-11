document.getElementById("jobForm").addEventListener("submit", function(event){

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("telephone").value;

if(username === "" || email === "" || phone === ""){
alert("Please fill in all required fields.");
event.preventDefault();
}

else{
alert("Application submitted successfully!");
}

});
