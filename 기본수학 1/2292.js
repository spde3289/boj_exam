const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const n = input[0];
    
    let [sum,i] = [1,1];
        while (sum < n){
        sum += i*6;
        i++;
    }; 
    console.log(i);

    process.exit(0);
})