
    // query selector
    /*
    selectors 
    -tag name
    - id
    - class
    */
   const body =document.querySelector('div') 
   
//    console.log(body);
// body.innerHTML = "<h1>Hacked!!</h1>"
// console.log(body.innerHTML);
// body.innerHTML = "<h1>Hii</h1>"

let elements = document.querySelectorAll('.one');


elements.forEach(function(element) {
//   element.style.color = "red";
});

let username = document.querySelector("#username")
// console.log(username.innerHTML)

// username.innerText ="John doe"


let select = document.querySelectorAll("div")
// console.log(select);

let classselector = document.getElementsByClassName('one')
// console.log(classselector);
for (let index = 0; index < classselector.length; index++) {
   classselector.item(index).style.background ="pink";
    
}
let paragraph1 = document.getElementsByClassName("one1")
console.log(paragraph1[0].innerText);
paragraph1[0].style.background ='red'
// paragraph1[0].remove()
