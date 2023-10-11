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

// // Оголошення функції (function declaration)
// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   }

// // Функціональний вираз (function expression)
//   const multipli = function (x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   };

//   multiply(1,1,1);
//   multipli(1,1,1);

// function min(a, b) {
//   return (a < b ? a : b);
// }

// const a = min (2,5);
// const b = min (3,-1);
// const c = min (1,1);

// console.log (a,b,c);

// function square(parametres) {
//   parametres = parametres.split(" ");
//   return (parametres[0]*parametres[1]);
// }

// console.log(typeof (square("2 3")));
// console.log(square("2 3"));
// console.log(square("12 3"));

// function square(parametres) {
//   parametres = parametres.split(" ");
//   return (Number(parametres[0])*Number(parametres[1]));
// }

// console.log(typeof (square("2 3")));
// console.log(square("2 3"));
// console.log(square("12 3"));

// logItems (['a','b','c']);

// function logItems (items){
//   for (let i=0; i<items.length; i+=1){
//     console.log(`${items[i]} це ${i+1} елемент списку`)
//   }
// }
// logItems (['a','b','c']);
// logItems (['1','2','3']);
// logItems (['dsffd','fdddg','dfdgfgr','dsffd','fdddg','dfdgfgr','dsffd','fdddg','dfdgfgr','dsffd','fdddg','dfdgfgr']);

// const a = ["a", "b", "c"];
// const b = ["1", "2", "3"];
// const c = ["dsffd", "fdddg", "dfdgfgr", "dsffd", "fdddg"];
// const result = [...a,...b,...c];
// console.log(result);

// const result1 = a.concat(b).concat(c);
// console.log(result1);