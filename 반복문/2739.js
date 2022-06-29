const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', line => {
    input = line
}).on('close', () =>{
    let N = +input
    for(let i=1; i<10; i++){
        console.log(`${N} * ${i} = ${N*i}`);
    }
    process.exit();
})