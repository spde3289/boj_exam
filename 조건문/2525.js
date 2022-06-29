const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let hour = +input[0].split(' ')[0]
    let minute = +input[0].split(' ')[1]
    let cookTime = +input[1]
    
       minute += cookTime

        while(minute >= 60) {
            minute -= 60
            hour += 1
        }

        hour %= 24;
        console.log(hour, minute)
    
})
