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

// const direction = [
//   "forward 5",
//   "down 5",
//   "forward 8",
//   "up 3",
//   "down 8",
//   "forward 2",
// ];

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
