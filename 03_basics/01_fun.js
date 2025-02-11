function myname()
{
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    
}
// myname() //calling fun 
//op=  K
    // R
    // I
    // T
    // I
// function twoNum(number1, number2) //here we call parameters
// {
//     console.log(number1 + number2);
// }

function twoNum(number1, number2) //here we call parameters
{
    let result = number1 + number2; 
    console.log(result);
    // or do return number1+number2
}

//here we call arguments
// twoNum(3, 4) //7
// twoNum(3, "4") //34

// const result = twoNum(3, 5) //upper result and this result are different 
// console.log(result);

function loginUser(username) //we can also pass as username = "Kritika" in fun
{
    if(username === undefined) //in js empty string and undefined when pass to if condition as taken as false
    {
        console.log("Please enter username");
        
    }
    return `${username} just logged in` //string
}
// console.log(loginUser("Kritika")); //op = Kritika just logged in
// console.log(loginUser()); //op = undefined

// function calcPrice(num1)
// {
//     return num1;
// }
// console.log(calcPrice(2)); //op= 2

// ...name this is called rest operator or spread operator on basis of usecase

// function calcPrice(...num1) //rest operator
// {
//     return num1;
// }
// console.log(calcPrice(200, 400, 600)); //op = [ 200, 400, 600 ]

function calcPrice(val1, val2,...num1) //rest operator
{
    return num1;
}
//imp for interview
// console.log(calcPrice(200, 400, 600, 10000)); //op = [ 600, 10000 ]

const user={
    name:"Kritika",
    price: 199
}
function handleObj(anyObj)
{
    console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
    
}

handleObj(user) //op = Username is Kritika and price is 199
handleObj(
{
    name:"Sam",
    price:399 //passing value in object
})
const newArr = [22, 33, 44]
function returnSecVal(getArr)
{
    return getArr[1]
}
// console.log(returnSecVal(newArr));
console.log([55, 88,99]);
