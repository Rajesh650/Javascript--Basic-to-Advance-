//************   Here we are toggling ********/

// let btn = document.getElementById('Click')
// const name =   document.getElementById("one")


// btn.addEventListener('click',function(){
//     console.log('btn is clicked');

//     if(name.style.color ==='red'){
//         name.style.color = 'pink'
//     }else{
//         name.style.color = 'red'
//     }

    

// })

//  here i want to delete the text on which i am clicking

let allChildren = document.querySelector("body").children;

// Iterate over all child elements
for (let i = 0; i < allChildren.length; i++) {
    // Store the current element in a variable
    let element = allChildren[i];

    // Add a click event listener to the current element
    element.addEventListener("click", function() {
        // Remove the clicked element
        element.remove();
    });
}
