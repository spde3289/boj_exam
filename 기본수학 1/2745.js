// 진법 변환
// https://www.acmicpc.net/problem/2745
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  const [N, B] = input.split(" ");

  let ans = parseInt(N, B);

  console.log(ans);
});
