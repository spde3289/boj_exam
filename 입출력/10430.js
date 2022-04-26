const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '입출력/10430.txt';

const input = fs.readFileSync(filePath).toString().split(' ');

const a = +input[0];
const b = +input[1];
const c = +input[2];

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);