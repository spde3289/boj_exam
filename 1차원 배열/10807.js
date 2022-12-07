const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});
rl.on('line', line => {
    input.push(line);
}).on('close', () => {

    let integer = input[1].split(' ');
    const V = Number(input[2]);
    
    const answer = integer.filter(el => el==V);
    console.log(answer.length);

    process.exit();
});