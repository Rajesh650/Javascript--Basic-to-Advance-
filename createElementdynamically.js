 const button = document.getElementById('Click')
 const container = document.getElementById('my-container')

let count =1

 button.addEventListener('click',()=>{
    const ele = document.createElement('li');
    ele.innerText = count
    container.appendChild(ele)
    count++
 })
