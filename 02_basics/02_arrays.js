const marvelHeroes = ["Thor", "Ironman", "Spierman"]
const dc = ["Superman", "flash"]
// marvelHeroes.push(dc) //array of array will be created, push on existing array
// console.log(marvelHeroes);

const allHeroes = marvelHeroes.concat(dc)//returns new array
// console.log(allHeroes);

//instead of concat we can use this
const allNewHeroes = [...marvelHeroes, ...dc] //spread operator
console.log(allNewHeroes);

const anotherArr = [1, 3, 4, [6, 7], 1, [0, 8, [6, 5]]]
//flat operator, depth is given in falt()
const realAnotherArray = anotherArr.flat(Infinity)//all value will be spread out using flaty
console.log(realAnotherArray);


console.log(Array.isArray("Kritika"))
console.log(Array.from("Kritika")) //will create array
console.log(Array.from({name:"Kritika"}))  //IMPORTANT
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //return new array from set of ele


