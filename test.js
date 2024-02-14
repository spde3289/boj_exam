const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input;
let answer = "";
rl.on("line", (line) => {
  input = line.split(" ").map((el) => Number(el));
}).on("close", () => {

  const arr = [1, 1, 2, 2, 2, 8];
  for (let i = 0; i < arr.length; i++){
    input[i]
    answer += arr[i] - input[i] + " ";
  }
  console.log(answer);
});
