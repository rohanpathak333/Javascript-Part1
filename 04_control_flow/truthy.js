const userEmail = "rohan@.com"
//emptu double quotes hai to falsy hai and empty []array hai to truthy hai

if (userEmail){
    console.log("Got user email");
} else {
    console.log("Dont have user email");
    
}



// falsy values
// false, 0, -0, BigInt 0n, "", null, undefines, NaN

// truthy values
// "0", 'false', "false", " ",[] empty array,{} empty object
// function(){}  

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 //output is 5
// val1 = null ?? 10 // output is 10
// val1 = undefined ?? 15 // output is 15
// val1 = null ?? 10 ?? 20 // output is 10

// console.log(val1);

// Ternary Operator
//  condition ? true : false
  
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")













