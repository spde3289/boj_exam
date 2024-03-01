const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  let dot = 2;
  for (let i = 0; i < input; i++) {
    dot += Math.pow(2, i);
  }
  console.log(Math.pow(dot, 2));
});
