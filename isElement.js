let arr = [4,9,6,1,3,5]
let key = 2
let flag = true;
for (let i =0; i<arr.length;i++){
    if (arr[i]==key){
        flag = false;
        console.log("element found !!");
        break;
    }}
if(flag){
        console.log("element not found !!");
    }


    