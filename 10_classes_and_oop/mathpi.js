//object can be iteratible, to know the Math property we do this


// console.log(Math.PI); //op = 3.141592653589793
// Math.PI = 5
// console.log(Math.PI); //value will not be changed


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") //Math modeule me se PI ki value chahiye
//console.log(descriptor);
//o/p = {
        // value: 3.141592653589793,
        // writable: false,
        // enumerable: false,
        // configurable: false
        // }

//creating own obj
const chai = {
    name:"ginger tea",
    price:20,
    isAvailiable:true,
    orderChai: function(){
        console.log("chai ftt gyi");
        
    }
}
//console.log(chai); //o/p = { name: 'ginger tea', price: 20, isAvailiable: true }
//getting infor about chai

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//op will be  == 
// {
//     value: 'ginger tea',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

//changing properties of chai
// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })
//console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//op will be = 
// {
//     value: 'ginger tea',
//     writable: false,
//     enumerable: false,
//     configurable: true
// }

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);//this will not print the function orderChai correctly, so we will write the if condition
    }
}


