const user1={

    userName : "Rajesh",
    price :999,
    welcomeMessage : function(){

      console.log(`${this.userName},welcome to our website`);
      console.log(this);

    }

  }
// user.welcomeMessage()

// let user = function(){
//     let userName = "Rajesh"
//     console.log(this.userName);  // undefined
// }
// user()

let user = () =>{
    let userName = "Rajesh"
    console.log(this.userName);  // here we will get output as undefined
    console.log(userName);  //  Rajesh   ,so we don't use this keyword in javascript
}
// user()



const addTwo = (num1,num2) =>{
    // console.log(`${num1 +num2}`);
    return num1+num2    //explicitly we are using here return keyword
}

// addTwo(3,4)
// console.log(addTwo(3,4));




// const addThree = (num1,num2,num3) => num1+num2+num3 // implicit

// console.log(addThree(1,2,3));


//  returning object using arrow function

const Addtwo =(num1,num2) =>({name :"Rajesh"} )

console.log(Addtwo(5,6));