const fs = require("fs");
const internal = require("stream");

let data = fs.readFileSync("input2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

direction = data.split("\n");

/*Part 1
let horizontalPosition = 0;
let depth = 0;

direction.forEach((element) => {
  let newArray = element.split(" ");
  const units = parseInt(newArray[1]);

  if (newArray[0] == "forward") {
    horizontalPosition += units;
  } else if (newArray[0] == "down") {
    depth += units;
  } else if (newArray[0] == "up") {
    depth -= units;
  }
});

// let finalPosition = depth * horizontalPosition;

// console.log(`Final position: ${finalPosition}`);*/

//Part 2
let horizontalPosition = 0;
let depth = 0;
let aim = 0;

direction.forEach((element) => {
  let newArray = element.split(" ");
  const units = parseInt(newArray[1]);

  if (newArray[0] == "forward") {
    horizontalPosition += units;
    depth += aim * units;
  } else if (newArray[0] == "down") {
    aim += units;
  } else if (newArray[0] == "up") {
    aim -= units;
  }
});

let finalPosition = depth * horizontalPosition;

console.log(`Final position: ${finalPosition}`);
