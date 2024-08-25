//singleton

//object literals
//Object.create //singleton method

const mySym = Symbol("key1")

const JsUser = {
    name: "Rohan",
    "full name": "Rohan Pathak",
    [mySym]: "mykey1",// Symbol ka syntax
    age: 25,
    location: "Jaipur",
    email: "rohanpathak@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)// this is not a good practice to access objects like this, it is used to acces values
console.log(JsUser["email"]) 
console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)
console.log(JsUser[mySym])

JsUser.email = "rohan@hotmail.com"
// Object.freeze(JsUser)
JsUser.email = "rohan@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);//function execute nhi hoga sirf refrence aaega

console.log(JsUser.greetingTwo());
