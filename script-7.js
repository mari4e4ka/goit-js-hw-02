const fnumbers = [12, 11, 3000, 0, 5];

const findBiggestNumber = function (numbers) {
  let bigestNumber = numbers[0];

  for (let number of numbers) {
    if (number > bigestNumber) {
      bigestNumber = number;
    }
  }

  return bigestNumber;
};

console.log(`Найбільше число в масиві:`, findBiggestNumber(fnumbers));
const numbers1 = [1, 2, 3, 4, 88, 5, 6, 7];
const numbers2 = [8, 9, 10, 117, 12, 13];
const numbers3 = [2, 3, 4, 58, 8];

console.log(`Найбільше число в масиві:`, findBiggestNumber(numbers1));
console.log(`Найбільше число в масиві:`, findBiggestNumber(numbers2));
console.log(`Найбільше число в масиві:`, findBiggestNumber(numbers3));
