const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

let input;
rl.on("line", (line) => {
  input = line.trim();
}).on("close", () => {
  let arr = [/c=/g, /c-/g, /dz=/g, /lj/g, /nj/g, /s=/g, /z=/g];
  arr.map((el) => (input = input.replace(el, "0")));
  console.log(input.length);
});
