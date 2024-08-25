let regularUser ={
    name:"Raj",
    email :"ABC@gmail.com",

    fullName :{

        userFullname:{
            firstname :"Rajesh",
            lastName:"Singh"
        }
    }
}
// console.log(regularUser.fullName.userFullname.firstname);

console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));
console.log(regularUser.hasOwnProperty("email"));