// 공 바꾸기
// https://www.acmicpc.net/problem/10813
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
  let arr = Array(N)
    .fill(1)
    .map((a, b) => a + b);

  for (let i = 1; i <= M; i++) {
    let [x, y] = input[i];
    let tmp = arr[x - 1];
    arr[x - 1] = arr[y - 1];
    arr[y - 1] = tmp;
  }

  console.log(arr.join(" "));
});
