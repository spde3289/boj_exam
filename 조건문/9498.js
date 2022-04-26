const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '조건문/9498.txt';

const input = fs.readFileSync(filePath).toString();

if (input >= 90){
    console.log('A');
} else if (input >= 80){
    console.log('B');
} else if (input >= 70){
    console.log('C');
} else if (input >= 60){
    console.log('D');
} else {
    console.log('f');
}