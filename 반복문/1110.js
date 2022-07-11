const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    i = 0;
    let num = Number(input);
    let sum;
    while (true) {
        i ++;
        
        sum = Math.floor(num/10) + num % 10;
        num = (num % 10) * 10 + sum%10;

        if(Number(input) === num){
            break;
        };
    };
    console.log(i);
    process.exit();
});