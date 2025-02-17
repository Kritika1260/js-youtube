const coding = ['js', 'ruby', 'cpp', 'python']
//forEach asks for callback function 
//forEach will iterate over each value of arr
coding.forEach( function (item) {
    // /console.log(item);
    //oUTPUT     = 
    //js
    // ruby
    // cpp
    // python
})

coding.forEach( (val) => {  // arrow function
    //console.log(val);
    
} )     

// function printMe(item)
// {
//     console.log(item); //this function prints everything 
// }

// coding.forEach(printMe)   //passing function

// coding.forEach( (item, index, arr) => { //we can also pass index and arr
//     console.log(item, index, arr);
// })


//array of objects
const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "python",
        langFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
    
})
