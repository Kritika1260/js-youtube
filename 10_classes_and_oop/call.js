function setUsername(username){
    //complex db calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    //setUsername(username)//this fun is not called so we are not getting username o/p when doing console.log(chai), as soon as the fun call for setUserName is completed its var are removed from memory
    //setUsername.call(username), this will just call not set the username in createUser
    setUsername.call(this, username) //this is set username
    this.email = email,
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); //op = { email: 'chai@fb.com', password: '123' }
