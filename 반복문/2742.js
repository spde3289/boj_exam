const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
let answer = "";
rl.on('line',line => {
    input.push(line);
}).on('close', () => {
    let Input = input[0];
    for (let i = 1; i <= Input;) {
        answer += Input +"\n";
        --Input;
    };
    console.log(answer);
    process.exit();
})