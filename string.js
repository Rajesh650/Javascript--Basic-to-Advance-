let name = "Rajesh"

let repocount = 50

// console.log(`hello my name is ${name} and my repocount is ${repocount}.`);

const myname = new String("Rajesh singh")
// console.log(myname);
// console.log(myname[0]);
// console.log(myname.length);
// console.log(myname.toLocaleLowerCase());
// console.log(myname.toLocaleUpperCase());
// console.log(myname.charAt(3));
// console.log(myname.indexOf("e"));
// console.log(myname.length-1);

// console.log(myname.indexOf('o')); //-1
// console.log(myname.slice(1,-1)); //aj
// console.log(myname.substring(1,3));  //similar to slice but doesn't support negative index


const str = 'Hello World';

console.log(str.substring(1, 4)); // Output: 'ell'
console.log(str.substring(4));    // Output: 'o World'
console.log(str.substring(4, 1)); // Output: 'ell' (startIndex and endIndex are swapped)


console.log("**************")

const str1 = 'Hello World';

console.log(str1.substr(1, 4)); // Output: 'ello'
console.log(str1.substr(4));    // Output: 'o World'
console.log(str.substr(4, 4));   //output :o Wo
/*
Use substring() when you need to specify exact indices for the substring 
extraction, especially if you need to swap indices dynamically.

Use substr() when you want to extract a substring 
based on a starting index and a length, which can be convenient for cases where you know the starting point and the number of characters to extract.

 both substring() and substr() are used for 
 extracting substrings from strings in JavaScript, they differ 
 primarily in their parameter definitions (startIndex 
 and endIndex vs. startIndex and length) and how they handle negative indices or omitted parameters.




*/
