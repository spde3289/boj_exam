// 배수와 약수
// https://www.acmicpc.net/problem/5086
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => +el));
}).on("close", () => {
  let answer = "";

  for (let i = 0; i < input.length; i++) {
    let [N, M] = input[i];

    if (N % M === 0) {
      answer += "multiple \n";
    } else if (M % N === 0) {
      answer += "factor \n";
    } else if (N === 0 && M === 0) {
      answer += "";
    } else {
      answer += "neither \n";
    }
  }
  console.log(answer);
});
