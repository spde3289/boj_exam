const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
let answer = '';
rl.on('line', line =>{
    input.push(line);
}).on('close', () =>{
    const T = input[0];
    for(let i = 1; i <= T; i++){
        let a = Number(input[i].split(' ')[0]);
        let b = Number(input[i].split(' ')[1]);
        answer += `Case #${i}: ${a} + ${b} = ${a+b} \n`;
    };
    console.log(answer);
    process.exit();
});