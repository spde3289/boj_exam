const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
let answer = '';
rl.on('line', line =>{
    input.push(line);
}).on('close', () => {
    const N = input
    for(let i = 1; i <= N; i++) {
        for(let j = 0; j < i; j++){
            answer += '*';
        };
        answer += '\n'
    };
    console.log(answer);
    process.exit();
});