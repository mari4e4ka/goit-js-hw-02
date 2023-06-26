const math1 = [1, 2, 3, 4, 5];
const math2 = [6, 7, 8, 9, 10];
const math3 = [11, 12, 13, 14, 15];

// let totalPrise = 0;

// for (const value of math1) {
//   totalPrise += value;
// }

// console.log("Масив 1:", math1);
// console.log(`Загальна сума:`, totalPrise);

const summary = function (items) {
  let prise = 0;
  for (const value of items) {
    prise += value;
  }
  return prise;
};

const summaryMath1 = summary(math1);
console.log(`Масив 1:`, math1);
console.log(`Сума масиву 1:`, summaryMath1);

const summaryMath2 = summary(math2);
console.log(`Масив 2:`, math2);
console.log(`Сума масиву 2:`, summaryMath2);

const summaryMath3 = summary(math3);
console.log(`Масив 3:`, math3);
console.log(`Сума масиву 3:`, summaryMath3);
