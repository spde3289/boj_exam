const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
let answer = '';
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const a = Math.max(...input);
    let i = 0;
    while(true){
        const b = input[i];
        i++;
        if(+a === +b){
            break;
        };
    };
    answer = a +'\n'+ i;
    console.log(answer);
    process.exit();
});