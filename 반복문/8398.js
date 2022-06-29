const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line',line =>{
    input.push(line);
}).on('close', () =>{
    let N = 0;
    for(let i= 1; i <= +input; i++){
        N += i;
    }
    console.log(N)
    process.exit()
})