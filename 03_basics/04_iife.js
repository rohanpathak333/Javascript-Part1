//Immediately Invoked Function Expressions (IIFE)
//Global scope ke pollution se jo problem hoti hai kai baar , to jop us global scope ke variables hote hai ya jo bhi kuch declaration hai uske pollution ko hatane ke liye IIFE ka use kiya hai


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

//other method named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();
//(function)(execution)


//un named IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Rohan')