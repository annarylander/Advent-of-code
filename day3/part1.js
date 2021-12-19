const fs = require("fs");
const internal = require("stream");

let data = fs.readFileSync("input3.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

numbers = data.split("\n");

let gamma = "";
let epilon = "";

for (var i = 0; i < numbers[0].length; i++) {
  let zeros = 0;
  let ones = 0;

  numbers.forEach((element, index) => {
    if (element[i] == "0") {
      zeros++;
    } else if (element[i] == "1") {
      ones++;
    }
  });

  if (ones > zeros) {
    gamma += "1";
    epilon += "0";
  } else if (zeros > ones) {
    gamma += "0";
    epilon += "1";
  }
}

gamma = parseInt(gamma, 2);
epilon = parseInt(epilon, 2);
const powerConsumption = gamma * epilon;

console.log(`Power consumption: ${powerConsumption}`);
