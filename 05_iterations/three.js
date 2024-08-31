const arr = [1,2,3,4,5,6,7,8,9]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World life is unfair"

for (const greet of greetings) {
    // console.log(`char is ${greet}`);
    
}


//MAPS does not take duplicate entries
const map = new Map()
map.set('IN','INDIA')
map.set('USA','United States of America')
map.set('Fr','France')

// console.log(map);

for (const [key,valu] of map) {
    // console.log(key, ':-----', valu);
    
}


//maps are iterable but objects are not

const myObj= {
    game1= "NFS"
    game2 = "PUBG"
    game3 = "COD"
} 
// for (const [key,valu] of object) {
//     console.log(key, valu);
// }















