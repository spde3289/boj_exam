const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
let answer = '';
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const A = input[0];
    const B = input[1];
    const C = input[2];

    let product = A * B * C;

    let abc = product.toString().split('').map(el => Number(el));

    for(let i = 0; i < 10; i++){
        let num = abc.filter(num => num === i);
        answer += num.length + '\n';
    };

    console.log(answer);
    process.exit();

});