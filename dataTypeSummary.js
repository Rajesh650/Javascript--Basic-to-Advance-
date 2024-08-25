// primitive :- 

//  7 types {Call by value and copy get changed}

// string,Number,Boolean,null,undefinied,symbol,bigint


/* 
JavaScript is a dynamic language and not static, 
which means that variables can hold 
values of different types during runtime.
*/

// Reference (Non primitive)

// Array,objects,functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(id);
// console.log(anotherId);

/*

return type of our datatypes

 Tyep       returnType

1. null         "object"
2. undefinied   "undefined"
3. Boolean      "boolean"
4. Number       "number"
5. bigint       "bigint"
6. string       "string"
7. symbol       "symbol" 

The Null type is inhabited by exactly one value: null.

*/