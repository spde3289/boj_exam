const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '조건문/2753.txt';
const input = fs.readFileSync(filePath).toString().split(' ');
const a = +input[0];

if ( a % 4 === 0 && (a%100 !== 0 || a%400 === 0)){
    console.log("1");
} else {
    console.log("0");
}

