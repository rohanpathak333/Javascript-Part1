// var c = 3300


// if(true){
//    let a = 10
//    const b = 20
// //    var c = 30
// }
// // console.log(a);
// // console.log(b);
// console.log(c);
        

function one(){
   const username = "Rohan"
   function two(){
      const website = "youtube"
      console.log(username);
      
   }
   // console.log(website);

   two()
   
}
// one()

if(true){
   const username = "rohan Pathak"
   if(username === "rohan Pathak"){
      const website = " youtube"
      console.log(username + website);
   }
   // console.log(website); //website is not defined in this scope
}
// console.log(username); //username is not defined in this scope


//++++++++++++++++++++++++Interesting Concept+++++++++++++++++++++++

console.log(addone(5))//it can be accessed before the initialisation
//ye ek function hai
function addone(num){
   return num + 1
}


addTwo(5) //cant access this because yha par declare ke baad usko ek variable me hold bhi kar diya hai
//ye bhi ek function hai
const addTwo = function(num){
   return num + 2
}


