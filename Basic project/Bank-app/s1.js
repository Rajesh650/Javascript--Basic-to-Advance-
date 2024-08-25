setTimeout(() =>{
    console.log("1st timeout");
    setTimeout(() =>{
        console.log("2nd timeout");
        setTimeout(() =>{
            console.log("last timeout");
},1000)
    },2000)
},500)