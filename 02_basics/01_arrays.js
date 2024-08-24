// Arrra

const myArr = [1,2,3,4,5]
const myHeros = ["Shaktimaaan", "Gunior-G", "HERO"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9)//starting me insert karta hai array me
myArr.shift()//it will remove 9 from the array, basically removes the first element 

console.log(myArr.includes(5))
console.log(myArr.indexOf(19))
console.log(myArr)

const newArr = myArr.join()//adds all elements array to string

console.log(myArr);
console.log(newArr);

console.log(typeof myArr);//object
console.log(typeof newArr);//string

//slice,  splice
console.log("a ", myArr);// a [1,2,3,4,5,6]
const myn1 = myArr.slice(1, 4)

console.log(myn1);//[2,3,4]
console.log("b ", myArr);// b [1,2,3,4,5,6]

const myn2 = myArr.splice(1,3)
console.log("c", myArr); // c[1,5,6] bole to 2,3,4 uda diya original array se
console.log(myn2);

