const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', ()=> {
    const n = input[0].split(' ')
    const [A,B,C] = [n[0], n[1], n[2]];
    const margin = C - B;
    const answer = Math.floor(A/margin)+1;
    console.log( margin <= 0 ? -1 : answer );
    process.exit(0);
});