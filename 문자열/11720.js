//숫자의 합
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
let answer = 0;
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const N = Number(input[0]);
    const int = input[1].split('').map(el=>Number(el));

    for(let i = 0; i < N; i++){
        answer += int[i];
    };
    console.log(answer);

    process.exit();
});