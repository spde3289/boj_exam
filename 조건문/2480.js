const readline = require('readline');
const rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr = [];
rl.on('line', line=> {
    arr = line.split(' ').map( el => parseInt(el));
}).on('close', ()=> {
let price
for (let i = 0; i < arr.length; i++) {
    const dice1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
        const dice2 = arr[j];
        for (let k = i + 2; k < arr.length; k) {
            const dice3 = arr[k];
            if (dice3 === dice1 && dice1 === dice2) {
                price = 1000 + (arr[i] * 1000);
                console.log(price)
                break;
            } else if (dice3 === dice2 || dice3 === dice1 || dice2 === dice1 ){
                price = 1000 + (arr[i] * 100)
                console.log(price)
                break;
            } else {
                price = Math.max(...arr)*100
                console.log(price)
                break;
            }
        }
        break;
    }
    break
}})
