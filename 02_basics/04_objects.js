//singleton objects
// const tinderUser = new Object() //obj created singleton
const tinderUser = {} // same as above obj created but not singleton

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false;
// console.log(tinderUser); output is { id: '123abc', name: 'Sam', isLoggedIn: false }

//creating obj in obj
const regularUser = {
    email: "abcd@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Kritika",
            lastname: "Chaturvedi"
        }
    }
}
// console.log(regularUser.fullname); //{ userfullname: { firstname: 'Kritika', lastname: 'Chaturvedi' } }
// console.log(regularUser.fullname.userfullname); //{ firstname: 'Kritika', lastname: 'Chaturvedi' }
// console.log(regularUser.fullname.userfullname.firstname);//Kritika

//combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//this method is not correct

// const obj3 = Object.assign(obj1, obj2), in this syntax al values will go in obj1
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//another syntax
// const obj3 = Object.assign({}, obj1, obj2) //better approach
//in this syntax all values will go in {} empty object 

//mostly used
// const obj3 = {...obj1, ...obj2} //spread { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//values from db
//array of objects
const users = [
    {
        id: 1,
        email: "kc@gmail.com"
    },
    {
        id: 1,
        email: "ka@gmail.com"
    },
    {
        id: 1,
        email: "ab@gmail.com"
    }
]
// console.log(users[1].email);

// //very imp
// console.log(Object.keys(tinderUser)); //array output will come [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if propert is present


const course = {
    courseName: "js",
    price: "99",
    courseInstructor: "Hitesh"
}
// course.courseInstructor to print value

//another method to access, used widely
const {courseInstructor} = course
console.log(courseInstructor); //here we didn't write course.courseInstructor because of above statement

const {courseInstructor:Instructor} = course
console.log(Instructor); //destructure object