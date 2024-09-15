// 최댓값
// https://www.acmicpc.net/problem/2566
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const numbers = input.map((el) => el.split(" ").map(Number));

  let maxValue = 0;
  let maxY = 0;
  let maxX = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (maxValue < numbers[i][j]) {
        maxValue = numbers[i][j];
        maxY = i;
        maxX = j;
      }
    }
  }
  console.log(maxValue);
  console.log(`${maxY + 1} ${maxX + 1}`);
  process.exit();
});
