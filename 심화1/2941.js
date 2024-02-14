//크로아티아 알파벳
// https://www.acmicpc.net/problem/2941
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => {
  input = line
}).on("close", () => {
  let arr = [/dz=/g, /c=/g, /c-/g, /d-/g, /lj/g, /nj/g, /s=/g, /z=/g];
  arr.map((el) => {
    input = input.replace(el, ",");
  });
  console.log(input.length);
  process.exit();
});
