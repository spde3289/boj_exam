const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
let input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    for(let i = 1; i <= input[0]; i++){
            let a = +input[i].split(' ')[0];
            let b = +input[i].split(' ')[1];
            console.log(a + b);
        };
    process.exit();
});