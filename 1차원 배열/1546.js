const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    input[1].split(' ').map(el => Number(el));
    const M = Math.max(...input[1]);

    for(let i = 0; i < Number(input[0]); i++){
        input[1].splice(i,1,(input[1][i]/M*100));
    }; 

    let average = input[1].reduce((a,b) => a+b);
    console.log(average/Number(input[0]));
    process.exit();
});