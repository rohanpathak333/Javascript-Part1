let score = 137
let anotherScore ="137" //"" matlab string andar kuch bhi ho
let score3="137abcd"
let score4= null

//console .log(typeof score);
//console.log(typeof (score));

//console .log(typeof anotherScore);
//console.log(typeof (anotherScore));

let valueInNumber1 = Number(anotherScore) //string ko number bna diya
//console.log(typeof valueInNumber1);
//console.log(valueInNumber1); //137
let valueInNumber2 = Number(score3) //string(137abc) ko bhi number bna diya
//console.log(typeof valueInNumber2); //number
//console.log(valueInNumber1);//137
//console.log(valueInNumber2);// NaN

let valueInNumber3 = Number(score4) //null converted into number
//console.log(typeof valueInNumber3); //number
//console.log(valueInNumber3);// 0



//"137" => 137
//"137abc" => NaN
// true => 1; false =>0

let isLoggedIn = 1   //true
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let isLoggedIn4 = 0 //false
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
// console.log(booleanIsLoggedIn4);

let isLoggedIn2 = "" //false
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2);

let isLoggedIn3 = "0"   //true
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
// console.log(booleanIsLoggedIn3);

//1 => true; 0 => false
//"" => false
//"rohan"=> true
//"0" => true

let someNumber = 33
let stringNumber =String(someNumber)
//console.log(stringNumber); //33
//console.log(typeof stringNumber); //string



//*******************OPERATIONS********************************************

let value =3;
let negValue= -value 
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello "
let str2 = "Rohan "
let str3 = "please study hard"

let str4 = str1 + str2 + str3;
console.log(str4); 
console.log("1" + 2); //12
console.log(1+"2"); //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2"); //32  ye kaise aagya bhai
console.log(1+"2"+2);

console.log(+true); //1
// console.log(true+); //error
console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
 console.log(gameCounter);