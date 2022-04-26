const readline = require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

let inputNumber

rl.on('line', function (line) {
    inputNumber = line
    rl.close()
}).on('close', function () {
    if(line < 10){
        console.log('작은수입니다.')
    }else{
        console.log('큰수입니다.')
    }
})
