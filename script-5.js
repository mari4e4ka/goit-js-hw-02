const math = [5, 4, 3, 2];
console.log(math);

const result = function (numbers, numberToFind) {
  for (const number of numbers) {
    if (number === numberToFind) {
      return `Користувач ${numberToFind} знайдений`;
    }
  }
  return `Користувач ${numberToFind} не знайдений`;
};

console.log(result(math, 2));
