const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const indian_superheros = ["Shaktiman","Krrish","Hatim"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); 
//[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)// same output as for push
console.log(allHeros);
// [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


//better than concat we can use spread operator
const all_new_heros = [...marvel_heros, ...dc_heros, ...indian_superheros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
//we can also use 1,2, it depicts depth of array.
console.log(real_another_array)

console.log(Array.isArray("Rohan"))
console.log(Array.from("Rohan"))
console.log(Array.from({name:"rohan"}))//interesting kyoki ye isko convert nhi kar pa rha, isme batana padta hai ki aapko keys  ka array ya value k a array banana  hai.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3, all_new_heros));
