// 단어의 개수
// https://www.acmicpc.net/problem/1152
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.trim();
}).on("close", () => {
  let answer;
  if (input === "") {
    console.log(0);
  } else {
    answer = input.split(" ").length;
    console.log(answer);
  }
});
