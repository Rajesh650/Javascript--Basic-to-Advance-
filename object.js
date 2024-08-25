// singleton
// object literals

const mySym = Symbol("key1")

const User ={
    name : "Rajesh",
    "fullName" :"Rajesh Singh",
    age : 23,
    location : "blr",
    email : "Rajesh@google.com",
    isLoggedIn : false,
    lastloginDays : ["Monday","Saturday"],
    [mySym] :"key1"
}

// console.log(User.email)
// console.log(User["email"]);
console.log(User.fullName);
console.log(User["fullName"])
// console.log(User.mySym ,typeof mySym);

User.email = "rajesh@microsft.com"
// console.log(User);
// console.log(User.email);
// Object.freeze(email)

User.email = "Rajesh@netflix.com"
// console.log(User.email);

User.greeting = function(){
    console.log("Hii buddy!!");
   
}

User.greeting()
// console.log(User["greeting"]);  return a function

// console.log(User.greeting());