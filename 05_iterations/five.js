const coding= ["js","ruby","java","swift","c","C#"]

// coding.forEach( function (val){
//     console.log(val);
    
// })

// Using arrow function in foreach
// coding.forEach =( (value)=>{
//     console.log(value);
    
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName : "js"
    },
    {
        languageName: "python",
        languageFileName : "py"
    },
    {
        languageName: "java",
        languageFileName : "JAVA"
    },
    {
        languageName: "c++",
        languageFileName : "cpp"
    }
]
//accessing value from an object in a array
myCoding.forEach( (kadoo)=>{
console.log(kadoo.languageName);

})

