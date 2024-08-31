//  const coding = ["js","ruby","c++","java","python"]

//  const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
//foreach does not return values    
//  } )
//  console.log(values);
 
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num>5 )
console.log(newNums);
// [ 6, 7, 8, 9, 10 ]

const newNums1 = myNums.filter( (num) => {num>5} )
console.log(newNums1);
//[]

const newNums2 = myNums.filter( (num) => { return num>5} )
console.log(newNums2);
// [ 6, 7, 8, 9, 10 ]

const newNums3= []
myNums.forEach( (num)=> {
    if(num > 4){
      newNums3.push(num)
    }
})
console.log(newNums3);

const newNums4 = myNums.map( (num) => num + 10)
console.log(newNums4);

