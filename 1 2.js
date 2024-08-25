

//  ****Sync js means executing program line by line is known as sync js

// console.log("I")
// console.log("am")
// console.log("Sync Js");

// *** Async js is like 

// console.log("I")

// setTimeout(()=>
// {
//     console.log("Async Js");
// },5000)

// console.log("am")

function loadingData(){
    return new Promise((resolve,reject)=>(
        setTimeout(()=>{
            console.log("1)loading data")
        },2000)
    ))
}


function collectingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2)collectingData");
            resolve();
        },2000)
})
}

function approvingData(){
    return new Promise((resolve,reject)=>(
        setTimeout(()=>
        {
            console.log("3)ApprovingData")
        },3000)
    ))
}

function approved(){
    return new Promise((resolve,reject)=>(
        setTimeout(()=>
        {
            console.log(("4)Approved"))
        },4000)
    ))
}
async function ex(){
await loadingData();
await collectingData();
await  approvingData();
await approved();
}

ex();