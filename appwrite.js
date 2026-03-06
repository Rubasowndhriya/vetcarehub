const { Client, Account, ID } = Appwrite;

const client = new Client();

client
.setEndpoint('https://nyc.cloud.appwrite.io/v1')
.setProject('69a0645a00175dd7dceb');

const account = new Account(client);

function register(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

account.create(
ID.unique(),
email,
password
).then(()=>{

alert("Registration successful");
window.location="Dashboard.html";

}).catch((error)=>{
console.log(error);
alert(error.message);
});

}

function login(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

account.createEmailSession(email,password)
.then(()=>{

window.location="Dashboard.html";

}).catch((error)=>{
console.log(error);
alert(error.message);
});

}
