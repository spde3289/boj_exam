// 상수
// https://www.acmicpc.net/problem/2908
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  const [a, b] = input.split(" ");

  const reverseNum = (num) => {
    return Number(num.split("").reverse().join(""));
  };

  console.log(reverseNum(a) > reverseNum(b) ? reverseNum(a) : reverseNum(b));
});
