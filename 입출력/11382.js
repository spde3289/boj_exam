// 꼬마 정민
// https://www.acmicpc.net/problem/11382

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
}).on("close", () => {
  console.log(input[0] + input[1] + input[2]);
});