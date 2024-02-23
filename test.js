const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input;

rl.on("line", (line) => {
  input = line.split(" ").map(el => +el);
}).on("close", () => {
  console.log(input[0], input[1], input[2]);
  let count = 0;
  let i = 0;
  
  while (true) {
    i += input[0];
    count += 1;

    if (i < input[2]) {
      i -= input[1];
    } else if (i >= input[2]) break;
  }
  console.log(count);
});
