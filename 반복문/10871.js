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
    let N = Number(input[0].split(' ')[0]);
    let X = Number(input[0].split(' ')[1]);
    let A = input[1].split(' ');
    for(let i = 0; i < N; i++){
        if ( Number(A[i]) < X) {
            answer += A[i] +' ';
        };
    };
    console.log(answer);
    process.exit();
});