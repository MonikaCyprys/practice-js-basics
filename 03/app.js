const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const tabOfNumbers = [a, b, c];

function compareNumbers(a, b) {
  return a - b;
}

function getSum(a, b, c) {
  tabOfNumbers.sort(compareNumbers);
  const twoTheBiggestNum = tabOfNumbers.slice(-2);
  return twoTheBiggestNum[0] + twoTheBiggestNum[1];
}

const isEven = function (sum) {
  if (typeof sum === "number") {
    const checkSum = sum % 2 === 0 ? true : false;
    return checkSum;
  } else return null;
};

const sum = getSum();
const even = isEven(sum);

const showInfo = function (sum, even) {
  console.log(sum, even);
  switch (even) {
    case null:
      console.log(`Podany argument ${sum} nie jest liczbą`);
      break;
    case true:
      console.log(`Podany argument ${sum} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${sum} jest nieparzysty`);
      break;
  }
};

showInfo(sum, even);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
