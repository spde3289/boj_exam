const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input ;

rl.on("line", (line) => {
  input = +line / 4;
}).on("close", () => {
  let answer = ""
  for (let i = 0; i < input; i++){
    answer += "long "
  }
  answer += "int "
  console.log(answer);
});
