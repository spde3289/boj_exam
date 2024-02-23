// 달팽이는 올라가고 싶다
// https://www.acmicpc.net/problem/2869
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
}).on("close", () => {

  let count = Math.ceil((input[2] - input[1]) / (input[0] - input[1]));

  console.log(count);
});