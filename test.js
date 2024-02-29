const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input ;

rl.on("line", (line) => {
  input = line.split(" ").map(el => +el)
}).on("close", () => {
  console.log(input[0] + input[1] + input[2]);
});