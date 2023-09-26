// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }
  
//   count(1, 5);
//   count(2);
//   count();
//   count(0,10,2);



// Оголошення функції (function declaration)
function multiply(x, y, z) {
    console.log(`Результат множення дорівнює ${x * y * z}`);
  }
  
// Функціональний вираз (function expression)
  const multipli = function (x, y, z) {
    console.log(`Результат множення дорівнює ${x * y * z}`);
  };

  multiply(1,1,1);
  multipli(1,1,1);