const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input =[];
let answer= '';
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    for(let i = 0; i < input.length; i++){
        let A = Number(input[i].split(' ')[0]);
        let B = Number(input[i].split(' ')[1]);
        answer += A+B + '\n';
    };
    console.log(answer);
    process.exit();
});