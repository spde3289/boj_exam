const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});
let input;
rl.on("line", (line) => {
  input = line.toString().trim();
}).on("close", () => {
  let arr = [/dz=/g, /c=/g, /c-/g, /d-/g, /lj/g, /nj/g, /s=/g, /z=/g];
  arr.map((el) => {
    input = input.replace(el, ",");
    console.log(input);
  });
  console.log(input.length);
  process.exit();
});
