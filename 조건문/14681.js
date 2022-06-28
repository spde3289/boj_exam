const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  ///////////////////////////////
  const x = input[0];
  const y = input[1];

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
  /////////////////////////////
  process.exit();
});

/*  const input = {
    x : 12,
    y : 5
 };

 if (input.x > 0 && input.y > 0){
    console.log('1');
 }else if (input.x < 0 && input.y > 0){
    console.log('2');
 }else if (input.x < 0 && input.y < 0){
     console.log('3');
    }else{
     console.log('4')
 } */