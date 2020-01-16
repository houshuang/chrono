var chrono = require("chrono-node");
var readline = require("readline");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const nth = function(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const getRoamDate = dateString => {
  const d = new Date(dateString);
  const year = d.getFullYear();
  const date = d.getDate();
  const month = months[d.getMonth()];
  const nthStr = nth(date);
  return `${month} ${date}${nthStr}, ${year}`;
};

var rl = readline.createInterface(process.stdin, process.stdout);
rl.on("line", function(line) {
  console.log(`[[${getRoamDate(chrono.parseDate(line))}]]`);
  process.exit(0);
});
