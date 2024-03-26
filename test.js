const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
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
    console.log(0)
  } else {
    console.log(a[k - 1]);
  }
});
