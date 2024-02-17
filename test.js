const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = input[0];
  let count = 0;
  let value = true;
  input.shift();

  const check = (word) => {
    const wordArr = word.split("");
    value = true;
    wordArr.reduce((acc, cur, idx, arr) => {
      if (acc != cur && -1 != arr.indexOf(acc, idx)) {
        value = false;
      } else if (value && idx + 1 === arr.length) {
        value = true;
      }
      return cur;
    });
  };

  for (let i = 0; i < n; i++) {
    check(input[i]);
    if (value) {
      count += 1;
    }
  }

  console.log(count);
});
