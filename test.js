let input = "839 237";

const [a, b] = input.split(" ");

const reverseNum = (num) => {
  return Number(num.split("").reverse().join(""));
};

console.log(reverseNum(a) > reverseNum(b) ? reverseNum(a) : reverseNum(b));
