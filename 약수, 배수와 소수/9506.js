// 약수들의 합
// https://www.acmicpc.net/problem/9506
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(+line);
}).on("close", () => {
  let answer = ``;
  for (let i = 0; i < input.length - 1; i++) {
    const n = [];
    for (let j = 1; j < input[i]; j++) {
      if (input[i] % j === 0) {
        n.push(j);
      }
    }
    const s = n.reduce((pre, cur) => {
      return pre + cur;
    });

    if (s != input[i]) {
      answer += `${input[i]} is NOT perfect. \n`;
    } else {
      answer += `${input[i]} = ${n.toString().replaceAll(",", " + ")} \n`;
    }
  }
  console.log(answer);
});
