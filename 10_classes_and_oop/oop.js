
//Object Literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDeatils: function(){
        //console.log("Got user details");
        //console.log(`UserName: ${this.username}`);//without this it will give error
        console.log(this);//op of this will be = 
        // {
        //     username: 'hitesh',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDeatils: [Function: getUserDeatils]
        // }
    }

}


//console.log((user.username));
//console.log(user.getUserDeatils()); this will give undefined

//console.log(this); //this will print {}

//Constructor function

// const promiseOne = new Promise()
// const date = new Date() //this new keyword is constructor fun, this allows to create multiple
//multiple instance from one object literal

function User(username, loginCount, isLoggedIn){
    this.username = username
    //LHS is the variable
    //RHS is the value that we are passing
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        //console.log(`Welcome ${this.username}`);
        
    }
    return this //this will pass on the obje and access whole object
}

//const userOne = User("Hitesh", 2, true)
//const userTwo = User("ChaiaurCode", 12, true)

//console.log(userOne);
//this is overwrite the values and print
// username: 'ChaiaurCode',
// loginCount: 12,
// isLoggedIn: true
//so thats's why use constructor fun using new keyword

const userOne = new User("Hitesh", 2, true)
const userTwo = new User("ChaiaurCode", 12, true)
console.log(userOne.constructor);//reference of itself

//instanceof - study


//console.log(userOne);

//step1: when we use new keyword a empty obj is created called object
//step2: constructor fun is called using new keyword this packs argument and give us
//step3: in this step all steps are injected in this keyword
//step4: we get values in fun




