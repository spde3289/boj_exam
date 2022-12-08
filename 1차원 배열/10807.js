const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});
const input = [];
const answer = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const N = Number(input[0]);
    let integer = input[1].split(' ').map(el=>Number(el));
    const V = Number(input[2]);
    
    for(let i = 0; i <= N; i++){
        if(integer[i] === V){
            answer.push(integer[i]);
        };
    };

    console.log(answer.length);

    process.exit();
});