const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const total = Number(input[0]);
    const count = Number(input[1]);
    const sum = 0;
    for(let i = 0; i <= count; i++) {
        sum += Number(input[i+2].split(' ')[0]) * 
        Number(input[i+2].split(' ')[1]);
    };
    console.log(total === sum ? 'Yes' : 'No');
    process.exit();
});

