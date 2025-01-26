// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 != 1);

// console.log("2" > 1);//2 converted to int and give true
// console.log("02" > 1);//2 converted to int and give true
//but while comparison do it on same datatype

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true  //avoid these things
//comparison convert null to a number as 0 thats why 3 is giving true
// < > >= <= (comparison) and == (check) work differently

// console.log(undefined == 0); //false

// === strict check, check values and datatype also
console.log("2" == 2); //true
console.log("2" === 2); //false

// ****************************************

//Memory - Stack and Heap
// all primitive datatypes uses Stack
// all non - primitive datatypes uses Heap

let myYoutubeName = "hitesh"
anothername = "chaiaurcode" //copy of var is created
console.log(myYoutubeName);
console.log(anothername);

//non-primitive
let user1 = {
    email: "user@gmail" ,
    upi: "user@ybl"
}

let user2 = user1 //reference created so value will change using user2 also
user2.email = "hitesh@google.com"

console.log(user1.email);
console.log(user2.email);




