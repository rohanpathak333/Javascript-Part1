const user = {
    username: "Rohan Bhaiya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage() 
// user.username = "sanu"
// user.welcomeMessage()

console.log(this); //output is {}, because there is no current context and we are i  the node environment and this is referring to an empty object, as there is no context in the global.
//But when we execute the same line in browser, then the output will be  Window, firstly there was only one method to execute JS was in browser, but now we have our seperate engine which can execute JS that is node.

// the most global object in browser is the window object 

// function chai(){
//     let username = "Rohan the great"
//     console.log(this.username);// it is giving output as undefined , that we can use this only inside onject not inside fiunction
    
// }
// chai()

//  

const chai =  () => {
    let username = "rohan"
    console.log(this.username);
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit arrow functiion
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

//Curly bracket use kiya to return keyword use karna hi padega,
//parenthesis use kiya to nhi karna padega

const addTwo = (num1, num2) => ({username: "Rohan"})
//object return karwana hai to parenthesis lagana hi padenga


console.log(addTwo(3,4))