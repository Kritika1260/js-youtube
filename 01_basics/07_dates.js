let myDate =  new Date()
// console.log(myDate); //2025-01-29T17:45:10.690Z
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

//  ************************ IMPORTANT for interview *********************
// console.log(typeof myDate); //object

// let createdDate = new Date(2023, 0, 23) //month start from 0 in js
// console.log(createdDate.toLocaleDateString());
// let createdDate = new Date(2023, 0, 23, 5, 3) 
let createdDate = new Date("2023-01-14")
// console.log(createdDate.toLocaleDateString());

let myTimestamp = Date.now()
// console.log(myTimestamp);//milisecond value
// console.log(createdDate.getTime());//to get milisecond time to compare dates

// ******* IMP **********
// console.log(Math.floor(Date.now()/1000));//to get in second instead of milisec

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

// ********* IMPORTANT ************
newDate.toLocaleString('default',
{
    weekday:"long" //customizing the properties of localString output
})








