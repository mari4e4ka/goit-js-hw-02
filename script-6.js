const math = [5, 4, 3, 2];
const math1 = [6, 7, 8, 9];
console.log(math);
let message = "";

const result = function (numbers, numberToFind) {
  return numbers.includes(numberToFind) ? "Found" : "Not found";
};

console.log(result(math, 4));
console.log(result(math, 5));
console.log(result(math, 19));
console.log(result(math, 9));

console.log(result(math1, 6));
console.log(result(math1, 6));
console.log(result(math1, 9));
console.log(result(math1, 19));
