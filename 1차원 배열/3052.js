const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
const input = [];
const answer = [];
rl.on('line', line => {
    input.push(line);
}).on('close', ()=> {
    for (let i = 0; i < 10; i++) {
        let num = input[i] % 42;
        answer.push(num);
    };
    console.log(new Set(answer).size);
});