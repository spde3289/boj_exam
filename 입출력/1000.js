const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '입출력/1000.txt';

var input = fs.readFileSync(filePath).toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);