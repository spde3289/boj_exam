const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input;

rl.on("line", (line) => {
  input = line.toUpperCase();
}).on("close", () => {
  let obj = input.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let count = 0;
  let answer;

  for (let key in obj) {
    if (obj[key] === count) {
      answer = "?";
    } else if (obj[key] > count) {
      answer = key;
      count = obj[key];
    }
  }

  console.log(answer);
});
