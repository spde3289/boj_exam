// 소수 찾기
// https://www.acmicpc.net/problem/1978
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => +el));
}).on("close", () => {
  const N = input[0];
  const C = input[1];

  let answer = 0;

  for (let i = 0; i < N; i++) {
    let aa = [];
    let s = C[i];
    for (let j = 1; j <= s; j++) {
      if (s % j === 0) {
        aa.push(j);
      }
    }
    if (aa.length === 2) {
      answer += 1;
    }
  }
  console.log(answer);
});
