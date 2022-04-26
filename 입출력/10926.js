const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '입출력/10926.txt'

const input = fs.readFileSync(filePath).toString().trim();

console.log(input+"??!");