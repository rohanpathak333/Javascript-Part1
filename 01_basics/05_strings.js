const name = "Rohan"
const repoCount = 50
//Two ways of writing strings in console
console.log("My name is "+name + " and my repo count is " + repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Rohan-RP-com')
console.log(gameName[1]);//output will be o

console.log(gameName.__proto__)//through this we can access prototypes of the object

console.log(gameName.length);// output = 7
console.log(gameName.toUpperCase());//original value is not changed as it pass its copy

console.log(gameName.charAt(2));// h
console.log(gameName.indexOf('a'));

const mewString = gameName.substring(0,4)
console.log(mewString);

const anotherString = gameName.slice(-2,7)
console.log(anotherString);

const newStringOne ="      rohan      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rohan.com/rohan%20pathak"

console.log(url.replace('%20','_'))

console.log(url.includes('sundar'))
console.log(url.includes('pathak'))

console.log(gameName.split('-'))



