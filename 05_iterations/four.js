const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb: 'ruby',
    sw: "swift"
}
for (const key in myObject) {
        // console.log(key);
        // console.log(myObject[key]);
        // console.log(`${key} is the key and the value is ${myObject[key]}`);
        
        
    }


//for in loop in array

const programming = ["c++","java",'ruby','js']
for (const key in programming) {
        // console.log(key); 
        // output= 0,1,2,3
        console.log(programming[key]);
        //c++,java,ruby,js
        
    }

