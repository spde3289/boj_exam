const readline = require('readline');
const rl = carateInterfaces({
    input : process.stdin,
    output : process.stdout
});
const input = [];
let answer = '';
rl.on('line', line =>{
    input.push(line);
}).on('close', () =>{
    for(let i = 1; i <= input; i++){
        for(let j = input; j >= input; j++){
            answer += padStart()
        }
    }
})