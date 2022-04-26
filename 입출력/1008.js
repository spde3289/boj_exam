const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '입출력/1008.txt';

let input = fs.readFileSync(filePath).toString().split(" ");
let a = +input[0];
let b = +input[1]
console.log(a/b);