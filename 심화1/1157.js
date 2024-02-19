// 단어공부
//https://www.acmicpc.net/problem/1157
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;

rl.on("line", (line) => {
  input = line.toUpperCase();
}).on("close", () => {
  let obj = input.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let count = 0;
  let answer;

  for (let key in obj) {
    if (obj[key] === count) {
      answer = "?";
    } else if (obj[key] > count) {
      answer = key;
      count = obj[key];
    }
  }

  console.log(answer);
});
