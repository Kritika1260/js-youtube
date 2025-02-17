const coding =["js", 'ruby', 'java', 'cpp']

// for each doesn't return values so we cannot store it in var and print it
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values); gives output undefined because no value returned


// using filter we get a call back fun using which we access each value but we have to provide some condition, when condition will be true we get that as result
const myNums = [1, 2, 3, 4, 5]
// const newNums = myNums.filter( (num) => num > 3)
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num > 3 //when we will create scope using {} we have to use return keyword otherwise it will not print anything
// })
//console.log(newNums);

const newNums = []
myNums.forEach( (num) => {
    if(num > 3){
        newNums.push(num)
    }
})
console.log(newNums);
