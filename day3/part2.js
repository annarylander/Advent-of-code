const fs = require("fs");
const internal = require("stream");

let data = fs.readFileSync("input3.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

oxygen = data.split("\n");
co2 = data.split("\n");

function filterNumbers(numbers, isOxygen = true) {
  for (var i = 0; i < numbers[0].length; i++) {
    let zeros = 0;
    let ones = 0;

    numbers.forEach((element) => {
      if (element[i] == "0") {
        zeros++;
      } else if (element[i] == "1") {
        ones++;
      }
    });

    if (isOxygen && ones >= zeros) {
      numbers = numbers.filter((x) => x[i] == "1");
    } else if (isOxygen && zeros > ones) {
      numbers = numbers.filter((x) => x[i] == "0");
    } else if (!isOxygen && ones >= zeros) {
      numbers = numbers.filter((x) => x[i] == "0");
    } else if (!isOxygen && zeros > ones) {
      numbers = numbers.filter((x) => x[i] == "1");
    }

    if (numbers.length == 1) {
      return numbers;
    }
  }
  return numbers;
}

let oxygenRating = filterNumbers(oxygen, true);
let co2Rating = filterNumbers(co2, false);

oxygenRating = parseInt(oxygenRating[0], 2);
co2Rating = parseInt(co2Rating[0], 2);

const lifeSupportRating = oxygenRating * co2Rating;

console.log(`Lifesupport Rating is: ${lifeSupportRating}`);
