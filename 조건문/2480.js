const readline = require('readline');
const rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', line=> {
    input = line.split(' ').map( el => parseInt(el));
}).on('close', ()=> {
    let dice1 = input[0]
    let dice2 = input[1]
    let dice3 = input[2]

    if (dice1 === dice2 && dice1 === dice3) {
        console.log(10000 + (dice1*1000))
    }else if (dice1 !== dice2 && dice2 !== dice3 && dice1 !== dice3) {
        console.log((Math.max(...input))*100);
    }else{
        if (dice1 === dice2){
            console.log(1000 + (dice1*100));
        }else if (dice2 === dice3){
            console.log(1000 + (dice2*100));
        }else if (dice1 === dice3){
            console.log(1000 + (dice3*100));
        }};

})