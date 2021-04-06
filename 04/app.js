const min = 10;
const max = 200;
let twentyNumeros = [];
let orderedArray;
function get20numeros(min, max) {
  for (let i = 1; i <= 20; i++) {
    let randomNumeros = Math.round(Math.random() * (max - min) + min);
    twentyNumeros.push(randomNumeros);
  }
}
function get10TheBiggestNumeros(twentyNumeros) {
  orderedArray = twentyNumeros.sort((a, b) => b - a);
  orderedArray = orderedArray.slice(0, 10);
}
function sumNumeros(a, b) {
  return a + b;
}
function getArithmeticMean(theLargestNumeros) {
  const sumNumeros = theLargestNumeros.reduce(function (a, b) {
    return a + b;
  });
  return sumNumeros / theLargestNumeros.length;
}

get20numeros(min, max);
get10TheBiggestNumeros(twentyNumeros);
getArithmeticMean(orderedArray);
