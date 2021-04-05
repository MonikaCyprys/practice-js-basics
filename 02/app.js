/* rozwiązanie z pętlą for */

// let x = prompt("Podaj liczbę!");
// let multi;
// while (x > 9) {
//   x = prompt("Podaj liczbę mniejszą niż 9!")
// }
// for (let i = 1; i <= 9; i++) {
// multi = i * x;
// console.log(multi);
// }

/* rozwiązanie z pętlą while  */

const a = prompt("podaj podstawę liczby!");
const n = prompt("podaj wykładnik liczby!");
let iteration = 0;
let result = a;
let equation = a;

while (iteration < n - 1) {
  iteration++;
  result = result * a;
  equation += ` * ${a}`;
}
console.log(`${equation} = ${result}`);
console.log(a, n);
