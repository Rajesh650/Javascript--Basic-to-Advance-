// stack(primitive type datatypes) in this copy changes
// heap(non-primitive type datatypes) it stores in heap memory and in this we don't get the copy but we get original value


let name = "Rajesh Singh"
let myname = name;
// console.log(myname);

myname ="Rajesh kumar"
// console.log(myname);

let userone ={
    email :"abc2gmail.com",
    upi : "abc@ybl.com",

}
let usertwo = userone
console.log(userone)

usertwo.email = "xyz@gmail.com"
usertwo.upi = "xyz@ybl.com"
console.log(userone)
console.log(usertwo)



// in stack we get copy but in heap we get reference 
// in stack original value not get changed but in heap reference original value got changed
