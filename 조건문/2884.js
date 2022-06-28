const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];


rl.on("line", function (line) {
  input = line.split(' ').map( function(el){return parseInt(el)});
}).on("close", function () {
  ///////////////////////////////
    let num1 = input[0];
    let num2 = input[1];

    if(num2 - 45 < 0){
        num2 = 60 + (num2 - 45);
        num1 -= 1;
        if(num1 === -1){
            num1 = 23;
        }
    }else{
        num2 -= 45;
    };
    console.log(num1 + ' ' + num2)
  
  /////////////////////////////
  process.exit();
});
