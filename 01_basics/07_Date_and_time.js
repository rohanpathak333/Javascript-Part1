//Dates

let myDate = new Date()
console.log(myDate); //2024-08-24T01:41:51.753Z
console.log(myDate.toString());//Sat Aug 24 2024 01:42:43 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString());//8/24/2024, 1:43:47 AM
console.log(myDate.toDateString());//Sat Aug 24 2024
console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);//2023-01-23T00:00:00.000Z
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3,1)
console.log(myCreatedDate2);// 2023-01-23T05:03:01.000Z
console.log(myCreatedDate2.toLocaleString());// 1/23/2023, 5:03:01 AM

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3);// 2023-01-14T00:00:00.000Z
console.log(myCreatedDate3.toLocaleString());// 1/14/2023, 12:00:00 AM

let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4);//2023-01-14T00:00:00.000Z
console.log(myCreatedDate4.toLocaleString());// 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp);// 1724464823624
console.log(myTimeStamp.toLocaleString());// 1,724,464,823,624
console.log(myCreatedDate4.getTime());// 1673654400000
console.log(Math.floor(Date.now()/1000));// 1724464989

let newDate = new Date()
console.log(newDate);//2024-08-24T02:05:00.332Z
console.log(newDate.getMonth());// 7
console.log(newDate.getMonth()+1);  //8
console.log(newDate.getDay())// 3

//newDate.toLocaleString('default',{weekday: "long",dateStyle: "small"});
//console.log(newDate);



