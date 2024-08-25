let p1 = new Promise(function(resolve,reject){
    let xhr = new XMLHttpRequest();
    xhr.open('get','content.txt',true)  // in context file you can put any kind of data 
    xhr.send()


    xhr.addEventListener('load',function(){
        
        if(xhr.statusText == 'OK')
            {
                resolve(xhr.responseText)
            }
        else
            {
                reject(`Don't get furious...try again later man !!!`)
            }
    })
})


// consuming data
p1.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error(err);
})