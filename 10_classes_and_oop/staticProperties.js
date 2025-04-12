class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId(){
        return `123`
    }//method ko access hone se rok dega static
}

const kritika = new User("Kritika")
//console.log(kritika.createId())//after using static this will give error

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "!djfh")
iphone.logMe()
console.log(iphone.createId())//this is give error because it is static
