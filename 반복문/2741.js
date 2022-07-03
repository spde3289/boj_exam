const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
let answer = "";
rl.on('line', line =>{
    input.push(line);
}).on('close', () =>{
    let Input = Number(input);
    for(let i = 1; i <= Input; i++){
        answer += i + "\n";
    };
    console.log(answer);
    process.exit();
});
