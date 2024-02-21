const fs = require("fs");
const readline = require("readline");
const util = require("node:util");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});


let input = [];
let aa = 0
let GPA = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
  "P": null
}


rl.on("line", (line) => {
  const a = line.split(" ")
  if (GPA[a[2]] != null) {
    aa += +a[1]
    input.push(a[1] * GPA[a[2]]);
  }
}).on("close", () => {
  let sum = input.reduce((acc, cur) => {
    return acc + cur;
  });

  console.log((sum / aa).toFixed(6));
});
