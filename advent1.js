const fs = require("fs");
const internal = require("stream");

let data = fs.readFileSync("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

numbers = data.split("\n");
numbers = numbers.map((num) => Number(num));

let count = 0;

numbers.forEach(function (number, index) {
  if (numbers[index] > numbers[index - 1]) {
    count += 1;
  }
});

console.log(count);

//Pt.2

let currentSum = 0;
let previousSum = 0;
let countSum = 0;

numbers.forEach(function (number, index) {
  currentSum = numbers[index] + numbers[index + 1] + numbers[index + 2];
  previousSum = numbers[index - 1] + numbers[index] + numbers[index + 1];

  if (currentSum > previousSum) {
    countSum += 1;
  }
});

console.log(countSum);
