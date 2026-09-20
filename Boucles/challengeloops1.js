const prompt = require('prompt-sync')();
let a = parseInt(prompt(`enter a number:`))
console.log(` tableau de multiplicaion de ${a} :`)
for (let i = 1; i <= 10; i++) {
    let resultat = a * i;
    
console.log(`${a} * ${i} = ${resultat}`)}
;