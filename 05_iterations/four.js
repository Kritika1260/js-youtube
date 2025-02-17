//for in loop

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}
for (const key in myObj) {
    // console.log(myObj[key]);
    //console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ['js', 'rb', 'py']
for (const key in programming) {
    //console.log(key); //here keys will be p 1 2
    //console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
for (const key in map) {
    console.log(key); // will not give any output because iteration on maps is not possible
}