// 바구니 뒤집기
// https://www.acmicpc.net/problem/10811
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => +el));
}).on("close", () => {
  let [N, M] = input[0];

  let basket = Array(N)
    .fill(1)
    .map((a, b) => a + b);

  for (let i = 1; i <= M; i++) {
    let [a, b] = input[i];
    let arr = [];

    for (let j = a - 1; j < b; j++) {
      arr.push(basket[j]);
    }

    arr.reverse();
    basket.splice(a - 1, b - a + 1, ...arr);
  }

  console.log(basket.join(" "));
});
