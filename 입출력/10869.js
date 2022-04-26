const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '입출력/10869.txt'

const input = fs.readFileSync(filePath).toString().split(' ');

const a = +input[0];
const b = +input[1];

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);
