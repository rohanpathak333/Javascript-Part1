//... is the rest operator it will take all the values in the form of array
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
// [ 200, 400, 500, 2000 ]

const user ={
    username: "hitesh",
    price: 199
}
function handleObject(Object){
    console.log(`Username is ${Object.username} and price is ${Object.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));





