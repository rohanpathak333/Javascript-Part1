const tinderUser1 = new Object() //singleton object

const tinderUser2 ={} //non- singleton object

tinderUser1.id = "123abc"
tinderUser1.name = "Sammy"
tinderUser1.isLoggedIn = false
console.log(tinderUser1)
// { id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(tinderUser2)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Rohaan",
            lastname:"Pathak"
        }
    }
}
// console.log(regularUser.fullname.userfullname);


const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj5 = {5:"e", 6:"f"}

const obj3 = { obj1, obj2}
const obj4 = Object.assign({}, obj1,obj2,obj5)

const obj6 = {...obj1,...obj2,...obj5}
console.log(obj3)
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj4)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj6)
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


const users = [
    {id: 1,
    email:"a@gmail.com"
    },
    {id: 1,
    email:"a@gmail.com"
    },
    {id: 1,
    email:"a@gmail.com"
    },    
]
users[1].email
console.log(tinderUser1);

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));


//--------------------OBJECTS drestructuring and JSON API--------------------
const course = {
    coursename: "js is hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);












