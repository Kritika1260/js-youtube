const user = {
    username: "Kritika",
    price: 999,
    welcomeMessage: function()
    {
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this);
        //op=
        // {
        //     username: 'Sam',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        // } this prints username as Sam which is curr value
        
        
    }
}
// user.welcomeMessage()
// user.username = 'Sam'
// user.welcomeMessage()

// console.log(this); //op = {}
//IMPORTANT ----- in browser global obj is window obj


// function chai()
// {
//     let username="Kritika"
//     console.log(this.username); op= undefined, this is working fine in objs but not in functions
// }
// chai()

// const chai = function()
// {
//     let username="Kritika"
//     console.log(this.username); op= undefined
// }
// chai()

const chai = () => //arrow function
{
    let username="Kritika"
    console.log(this.username); //op= undefined
    console.log(this); //op = {}
}
//chai()


//ARROW FUNCTION
//() => {}
   // explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))
//curly breaces h to return keyword likhna pdega paranthesis me nhi

//IMPLICIT Return
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4)) or

// const addTwo = (num1, num2) =>  ( num1 + num2 )
// console.log(addTwo(3, 4))

// const addTwo = (num1, nums2) => {username:"Kritika"} //op =undefined becasue to return obj we have to wrap it in paranthesis
const addTwo = (num1, nums2) => ({username:"Kritika"}) //correct
console.log(addTwo(1, 2));
