const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    let Input = input[1].split(' ').map(el => Number(el));
    let M = Math.max(...Input);

    for(let i = 0; i < input[0]; i++){
        Input.splice(i,1,(Input[i]/M*100));
    }; 
    let average = Input.reduce((a,b) => a+b);
    console.log(average/input[0]);
    process.exit();
});