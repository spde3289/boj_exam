// 공넣기
// https://www.acmicpc.net/problem/10810

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map((item) => +item);
  const arr = new Array(n).fill(0);

  for (let i = 1; i <= m; i++) {
    let [a, b, c] = input[i].split(" ").map((item) => +item);

    for (let j = a; j <= b; j++) {
      arr[j - 1] = c;
    }
  }
  console.log(arr.join(" "));
});
