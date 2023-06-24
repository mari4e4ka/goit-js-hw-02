// ФУНКЦІЇЇ

// ОГОЛОШЕННЯ ФУНКЦІЇ
// const add = function (параметри-доступні тільки у межах функції){ аргументи }

const add = function (a, b) {
  // console.log(a);
  // console.log(b);
  const sum = a + b;
  // console.log("a + b =", sum);

  return sum;
};
// ВИКЛИК ФУНКЦІЇ

const sum1 = add(3, 4);
console.log("1. Сума чисел: ", sum1);

const sum2 = add(5, 6);
console.log("2. Сума чисел: ", sum2);

const sum3 = add(6, 7);
console.log("3. Сума чисел: ", sum3);

const sum4 = add(7, 8);
console.log("4. Сума чисел: ", sum4);

const sum5 = add(8, 9);
console.log("5. Сума чисел: ", sum5);
