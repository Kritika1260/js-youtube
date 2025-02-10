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

const result = twoNum(3, 5) //upper result and this result are different 
// console.log(result);

function loginUser(username) //we can also pass as username = "Kritika" in fun
{
    if(username === undefined) //in js empty string and undefined when pass to if condition as taken as false
    {
        console.log("Please enter username");
        
    }
    return `${username} just logged in` //string
}
console.log(loginUser("Kritika")); //op = Kritika just logged in
console.log(loginUser()); //op = undefined
