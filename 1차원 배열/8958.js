const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
let input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const N = input[0];
    for (let i = 1; i <= N; i++){
        let answer = 0;
        let k = 1;
        const Input = input[i].split('');
        for(let j = 0;j < Input.length; j++){
            if(Input[j] === 'O'){
                answer += k;
                k++;
            }else{
                k = 1;
            };
        };
    
        console.log(answer);
    };
    process.exit();
});