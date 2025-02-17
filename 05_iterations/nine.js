//                     reduce method

// const myNums = [1, 2, 3, 4, 5]
// const myTotal = myNums.reduce(function(acc, currval){
//     return acc + currval
// }, 0) //we have wrote 0 this will be the initial value of acc

//console.log(myTotal); //op =15

//commonly used in projects of shopping cart
// const myNums = [1, 2, 3, 4, 5]
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc : ${acc} andd currval: ${currval}`);
    
//     return acc + currval
// }, 0)

// console.log(myTotal);


const myNums = [1, 2, 3, 4, 5]
const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "mob dev course",
        price: 5999,
    },
    {
        itemName: "data scientist course",
        price: 3999
    }
]

//how to add all prices of shoppingCart
const pricetoPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(pricetoPay);
