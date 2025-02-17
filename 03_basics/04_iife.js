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




// ********* CALL STACK and how js execute code
//Global execution context - refered to this variable
//types of global execution context
//function execution context
//eval execution context
//memory creation phase or creation(memory allocation ) phase and execution phase is created during execution of function

// in call stack when multiple processes are called it follows fifo that is the last called process(fun) will come out first