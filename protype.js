var obj ={
    fName:"Raj",
};

var obj2={
    Lname:"smith",

}
obj2.__proto__ = obj;

console.log(obj.fName)
console.log(obj.lName)

