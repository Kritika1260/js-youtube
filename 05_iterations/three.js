// Array can contain objects as elements

//for of loop

// const arr = [1, 2, 3, 4]
// for (const num of arr) { //here object doen't mean the obj of js, object just mean the container on which we want ot apply object

//     console.log(num); //no need of increment decrement
//     //op = 1 2 3 4
// }

// const greetings = "hello"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

//Maps - contains unique value, key value pair
const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
// console.log(map);


// for(const [key, value] of map){
//     console.log(key, ':-', value); 
// }

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for(const [key, value] of myObj){
    console.log(key, ':-', value); 
} //this for of loop will not work for obj so we will use for in loop