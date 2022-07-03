const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
const input = [];
let answer = '';
rl.on('line',line =>{
    input.push(line);
}).on('close', () =>{
    const T = Number(input[0])
    for(let i=1; i <= T; i++){
        let [a, b] = input[i].split(' ');
        answer += Number(a) +Number(b) + "\n" ;
    };
    console.log(answer);
    process.exit();
});