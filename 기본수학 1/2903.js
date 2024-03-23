// 중앙 이동 알고리즘
// https://www.acmicpc.net/problem/2903
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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
