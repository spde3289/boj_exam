// 약수 구하기
// https://www.acmicpc.net/problem/2501
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
}).on("close", () => {
  const [n, k] = input;
  let a = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      a.push(i);
    }
  }

  if (k > a.length) {
    console.log(0);
  } else {
    console.log(a[k - 1]);
  }
});
