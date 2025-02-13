// Immediately Invoked Function Expressions(IIFE)

//fun which is invoked as soon as we run the file
//also there is global scope pollution because of global var to remove that we use iffe
(function chai() //named iffe --  name is chai
{
    console.log(`DB connected`);
    
})(); //to end iffe it is imp to use semicolon

// ( () => {
//     console.log("DB TWO");
    
// })(); op = DB TWO

( (name) => {
    console.log(`DB TWO ${name}`);
    
})('hitesh') //for passing parameter
