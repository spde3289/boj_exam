const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '입출력/2588.txt';

const input = fs.readFileSync(filePath).toString().split('\n');
console.log((input[1]%10)*input[0])
console.log(Math.floor((input[1]%100)/10)*input[0]);
console.log(Math.floor((input[1]/100))*input[0]);
console.log(input[1]*input[0]);