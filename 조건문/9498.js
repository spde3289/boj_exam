const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '조건문/9498.txt';

const input = fs.readFileSync(filePath).toString();
var a = +input;
if (a>=90){
    console.log('A');
}
else if (a>=80){
    console.log('B');
}
else if (a>=70){
    console.log('C');
}
else if (a>=60){
    console.log('D');
}
else{
    console.log('F');
}


