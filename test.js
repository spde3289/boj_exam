const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(el => +el));
}).on("close", () => {
  const N = input[0]
  const C = input[1]

  let answer = 0
  
  for (let i = 0; i < N; i++){
    let aa = []
    let s = C[i]
    for (let j = 1; j <= s; j++){
      
      if (s % j === 0) {
        aa.push(j)
      }
    }
    if (aa.length === 2) {
      answer += 1
    }
  }
  console.log(answer)
});
