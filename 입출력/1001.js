const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '입출력/1001.txt';

let input = fs.readFileSync(filePath).toString().split(' ');

var a = +input[0];
var b = +input[1];
console.log(a-b);


