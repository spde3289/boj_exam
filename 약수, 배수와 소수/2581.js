// 소수
// https://www.acmicpc.net/problem/2581
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(+line);
}).on("close", () => {
  let m = input[0];
  let n = input[1];
  let arr = [];

  function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    if (num > 1) {
      return arr.push(num);
    }
  }

  for (let i = m; i <= n; i++) {
    isPrime(i);
  }
  if (arr.length === 0) {
    console.log(-1);
  } else {
    const sum = arr.reduce((pre, cur) => {
      return pre + cur;
    });

    console.log(`${sum}\n${arr[0]}`);
  }
});

