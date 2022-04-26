const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '조건문/1330.txt';

const input = fs.readFileSync(filePath).toString().split(' ');

var a = +input[0];
var b = +input[1];
 
if (a<b){
    console.log("<");
} else if (a>b){
    console.log(">");
} else {
    console.log("==");
}

