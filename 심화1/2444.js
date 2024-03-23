// 별 찍기 -7
// https://www.acmicpc.net/problem/2444
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  for (let i = 1; i < input; i++) {
    let blank = " ".repeat(input - i);
    let stars = "*".repeat(i + (i - 1));
    console.log(blank + stars);
  }

  for (let j = input; j > 0; j--) {
    let blank = " ".repeat(input - j);
    let stars = "*".repeat(j + (j - 1));
    console.log(blank + stars);
  }
});

