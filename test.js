const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
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
