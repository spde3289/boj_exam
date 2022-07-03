const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
let answer = ' ';
rl.on('line', line =>{
    input.push(line);
}).on('close', () => {
    let Input = Number(input[0]);
    for(let i = 1; i < Input; i++){
        let a = input[i].split(' ')[0];
        let b = input[i].split(' ')[1];
        answer += `Case #${i}: ${Number(a)+Number(b)}\n`;
    };
    console.log(answer);
    process.exit();
});
