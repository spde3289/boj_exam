const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input;

rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  if (input === input.split("").reverse().join("")) {
    return console.log(1);
  } else {
    return console.log(0);
  }
});
