// Creating an array
let arr = [1, 2, 3, 4, 5];

// Adding and removing elements
arr.push(6); // Adds to the end
arr.pop(); // Removes from the end
arr.unshift(0); // Adds to the beginning
arr.shift(); // Removes from the beginning

// Accessing and modifying elements
let element = arr[2]; // Accessing
arr[2] = 10; // Modifying

// Finding elements
let index = arr.indexOf(10); // Finds the index of an element
let exists = arr.includes(10); // Checks if an element exists

// Iterating over an array
arr.forEach((item, index) => console.log(item, index)); // Iterates with a function
let newArr = arr.map(item => item * 2); // Creates a new array with transformed values

// Filtering arrays
let filteredArr = arr.filter(item => item > 2); // Filters elements

// Reducing arrays
let sum = arr.reduce((total, item) => total + item, 0); // Reduces to a single value

// Checking conditions
let allAboveZero = arr.every(item => item > 0); // Checks if all elements meet a condition
let someAboveThree = arr.some(item => item > 3); // Checks if some elements meet a condition

// Sorting arrays
arr.sort((a, b) => a - b); // Sorts numerically
arr.reverse(); // Reverses the array

// Finding elements with conditions
let firstAboveThree = arr.find(item => item > 3); // Finds the first element meeting the condition
let firstAboveThreeIndex = arr.findIndex(item => item > 3); // Finds the index of the first element meeting the condition

// Other useful methods
let slicedArr = arr.slice(1, 3); // Extracts a part of the array
arr.splice(1, 1, 7, 8); // Removes/Modifies elements in place

// Concatenation
let anotherArr = [7, 8, 9];
let concatenatedArr = arr.concat(anotherArr); // Concatenates arrays

// Copying within an array
arr.copyWithin(1, 3, 5); // Copies part of the array to another location in the same array

// Filling arrays
arr.fill(0, 1, 4); // Fills elements with a static value

// Flattening arrays
let nestedArr = [1, [2, 3], [4, [5]]];
let flatArr = nestedArr.flat(); // Flattens the array to one level deep
let deeplyFlatArr = nestedArr.flat(2); // Flattens the array to specified depth

// Turning arrays into strings
let arrStr = arr.join(', '); // Joins all elements into a string

console.log(arr);
console.log(element);
console.log(index);
console.log(exists);
console.log(newArr);
console.log(filteredArr);
console.log(sum);
console.log(allAboveZero);
console.log(someAboveThree);
console.log(firstAboveThree);
console.log(firstAboveThreeIndex);
console.log(slicedArr);
console.log(concatenatedArr);
console.log(flatArr);
console.log(deeplyFlatArr);
console.log(arrStr);
