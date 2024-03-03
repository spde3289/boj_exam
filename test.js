const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input= [];

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
