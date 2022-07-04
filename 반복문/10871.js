const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
let answer = '';
let star = '';
rl.on('line', line =>{
    input.push(line);
}).on('close', () => {
    for(let i = 1; i <= input; i++){
        for(let j = 1; j <= input-i; j++){
            answer += ' ';
        };
        for(let k = 1; k <= i; k++){
            star += '*';
        };
        answer += star+"\n";
        star = '';
    };
    console.log(answer);
    process.exit();
});