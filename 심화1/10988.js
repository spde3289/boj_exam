// 팰린드롬인지 확인하기
// https://www.acmicpc.net/problem/10988
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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