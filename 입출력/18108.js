const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '입출력/18108.txt';

const input = fs.readFileSync(filePath).toString().split(" ");

const a = +input[0];
console.log(a-543);