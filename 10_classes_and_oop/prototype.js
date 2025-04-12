let myName = "hitesh"
console.log(myName.length); //op = 6

let myName2 = "hitesh  "
console.log(myName2.length); //op = 8(two spaces)

//we will now create a trueLength fun that will tell the true len withour space of a string

let myHeros = ["Thor", "Hulk"]
//creating object
let heroPower = {
    thor: "hammer",
    hulk:"strength", getSpiderPower: function(){
        //console.log(`Thor power is ${this.hulk}`);
    }
}

Object.prototype.hitesh = function(){
    //console.log("hitesh is present in all objs");
} //added new property in OBJ

//heroPower.hitesh()
myHeros.hitesh()
//both myHeroes and heroPower will have access to .hitesh

Array.prototype.heyHitesh = function(){
    console.log("hitesh says hello");
} //added new property just on the array

myHeros.heyHitesh() //hitesh says hello
//heroPower.heyHitesh() this will give error 

//inheritance

const user = {
    name: "chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo: true 
}
const teachingSupport = {
    isAvailiable:false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTIme: true,
    __proto__: teachingSupport
}

Teacher.__proto__ = user //outdated approach

//modern syntax
Object.setPrototypeOf(teachingSupport, Teacher)
//teaching support will access properties of Teacher

let userName2 = "chaiaurcode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True len is ${this.trim().length}`);
    
}
userName2.trueLength()
"hitesh".trueLength()
"icedtea".trueLength()
