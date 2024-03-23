// 코딩은 체육과목 입니다.
// https://www.acmicpc.net/problem/25314
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = +line / 4;
}).on("close", () => {
  let answer = "";
  for (let i = 0; i < input; i++) {
    answer += "long ";
  }
  answer += "int ";
  console.log(answer);
});
