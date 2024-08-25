let plusbtn = document.querySelector('#plus')
let minusbtn = document.querySelector('#minus')
let count=0;
let arr=document.querySelectorAll('.a')
plusbtn.addEventListener('click',()=>{
    
    count++
    arr[0].innerHTML=count;
    arr[1].innerHTML=count;
    
});


minusbtn.addEventListener('click',()=>{
    count--
    arr[0].innerHTML=count;
    arr[1].innerHTML=count;
})
