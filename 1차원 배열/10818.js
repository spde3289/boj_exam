const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
const input = [];
let answer = '';
rl.on('line', line => {
    input.push(line);
}).on ('close', () => {
    let a = input[1].split(' ').map( el => Number(el));
    answer = Math.min.apply(Math, a) + ' ' + Math.max.apply(Math, a);
    
    console.log(answer);
    process.exit();
});