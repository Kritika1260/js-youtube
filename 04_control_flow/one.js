//conditionals
// <, >, <=, >=, ==, !=, ===(also check data type -- strict equal), !==

// const temp = 41
// if(temp === 41)
// {
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
    
// }

const score=200
// if(score > 100)
// {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //this will give error because of scope of power

// if(score > 100)
// {
//     var power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //this will not give error because var has global scope so don't use var use let

const balance = 1000
// if(balance > 500)  console.log('test'), console.log('test2'); //we can do this but not good practice


//if else if are used

// const userLoggedIn = true
// const debitCard = true
// if(userLoggedIn && debitCard)
// {
//     console.log("Allow to buy couse");
// }

// if(userLoggedIn || debit card)
// {
//     console.log("run");
    
// }

// switch(key)
// {
//     case value:
//         break;
//     default:
//         break;
// }

// const month=4
// switch(month)
// {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("mar");
//         break
//     default:
//         console.log("invalid input"); 
//         break    
// }

const month = "mar"
switch(month)
{
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "mar":
        console.log("mar");
        break
    default:
        console.log("invalid input"); 
        break;    
}
