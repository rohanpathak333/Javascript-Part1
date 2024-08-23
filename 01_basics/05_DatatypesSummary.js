//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // type = number

const outsideTemp = null  //type= object
let userEmail;
const isLoggedIn = false
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false


const bigNumber = 66626345436456264254626542n //bigInt



// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "rohan",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction) //function
console.log(typeof bigNumber) //bigInt
console.log(typeof outsideTemp) //object
console.log(typeof heros) //object
console.log(typeof id) //symbol



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "rohanpathakdotcom"
let anothername = myYoutubename
 anothername = "rohaanverse"

console.log(myYoutubename);
console.log(anothername); 

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}// this will store in heap memory and will give reference

let userTwo = userOne //it will get reference 

userTwo.email = "rohan@gmail.com"

console.log(userOne.email); //rohan@gmail.com
console.log(userTwo.email); //rohan@gmail.com 
