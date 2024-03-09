//primitive data types

//String
const name = "Gopal"
console.log(name);
//Number
const score = 100
console.log(score);
const scoreValue = 100.3
console.log(scoreValue);
//boolean
const isLoggedin = false
console.log(isLoggedin);
//Null
const outsideTemp = null
console.log(outsideTemp);
//undefined
let email;
console.log(email);
//symbol
const id = Symbol('123')
console.log(id);
const anotherId = Symbol('123')
console.log(anotherId);
console.log(id==anotherId);
//BigInt
const bigInt = 23415626527167387n
console.log(bigInt);


//Non-primitive or refference type
//Array
const heroes=['Shaktiman','Naagraj','Junior-G']
console.log(heroes);
//Objects
let anyObj={
    name:"Gopal",
    age:21,
}
console.log(anyObj);
//functions
const myFunction=function(){
    console.log("Hello me");
}   
