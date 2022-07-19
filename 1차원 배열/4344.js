const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const C = input[0].split(' ');
    for(let i =1; i <= C; i++){
        const Score = input[i].split(' ').map(el => Number(el));
        const N = input[i][0];
        let average = 0;
        let sum = 0;
        for(let j = 1;j < N; j++){
            sum += Score[j];
        };
        average = (sum/N).toFixed(3);
        console.log(average,'%\n');
    };
    process.exit();
});