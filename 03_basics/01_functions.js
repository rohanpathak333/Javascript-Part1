function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("N");
}
sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 +number2);
// }

// addTwoNumbers(3, "4")//34
// addTwoNumbers(3, "A")//3A
// addTwoNumbers(3, null)//3
// const result = addTwoNumbers(3, 6)//9
// console.log("Result:", result);//Result: undefined

function addTwoNumbers(number1, number2){
 
    // let result = number1 + number2
    // return result
    //another method
    return number1 + number2 
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){//or we can write (!username  )
         console.log("Please enter a username")
         return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("rohan")) //rohan just logged in
console.log(loginUserMessage("")) // just logged in
console.log(loginUserMessage()) //undefined just logged in//sam just logged in (when we have given sam name as default entry in the function)



