const a = "4.2";
const b = 9;

console.log(typeof (a, b));

const sum = parseFloat(a) + parseFloat(b);
const sub = parseFloat(a) - parseFloat(b);
const divide = parseFloat(a) / parseFloat(b);
const multi = parseFloat(a) * parseFloat(b);
const mod = parseFloat(a) % parseFloat(b);
const expo = parseFloat(a) ** parseFloat(b);

let tabOfNumbers = [];
tabOfNumbers.push(sum, sub, divide, multi);

let biggerThan20 = [];
let lowerThan20 = [];

function checkValueOfNumber() {
  tabOfNumbers.forEach((number) => {
    if (number > 20) {
      biggerThan20.push(number);
    } else {
      lowerThan20.push(number);
    }
  });
  console.log(`this numbers are bigger than 20: ${biggerThan20}`);
  console.log(`this numbers are lower than 20: ${lowerThan20}`);
}

checkValueOfNumber();
