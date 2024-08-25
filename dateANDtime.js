// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(typeof myDate);  //object

let newDate = new Date(2024 ,1,23)
console.log(myDate.toDateString());

let myNewDate = new Date("07-21-2024")
console.log(myNewDate.toLocaleDateString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myTimestamp);
console.log(myNewDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate1 = new Date();
console.log(newDate1.getDate());
console.log(newDate1.getMonth());

