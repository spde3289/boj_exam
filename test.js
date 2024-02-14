const fs = require('fs')
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./ex.txt"),
  output: process.stdout,
  terminal: false,
});

const input = [];
rl.on('line', function(line) {
  console.log('줄:', line);
});
