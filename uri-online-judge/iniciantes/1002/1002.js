let input = require('fs').readFileSync('./input.txt', 'utf8');
let lines = input.split('\n');
const PI = 3.14159;

let a = parseFloat(lines.shift());
const result = ((a*a)*PI).toFixed(4);
console.log(`A=${result}`);