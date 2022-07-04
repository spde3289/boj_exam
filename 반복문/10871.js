const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
let answer = '';
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const N = Number(input[0].split(' ')[0]);
    const X = Number(input[0].split(' ')[1]);
    for(let i = 0; i <= N; i++){
        if (Number(input[1].split(' ')[i]) < X) {
            answer += Number(input[1].split(' ')[i]) +" ";
        };
    };
    console.log(answer);
    process.exit();
});