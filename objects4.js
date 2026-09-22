const prompt = require('prompt-sync')();
let point = {
    X:8 ,
    Y:4,
}
console.log(" point X est = " + point.X +" point Y est = " + point.Y) 
point.X = 12 
point.Y = 8 
console.log(` nouvelle point est X = ${point.X} et Y= ${point.Y}`)