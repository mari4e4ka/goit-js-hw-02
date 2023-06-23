// const friends = ["One", "Two", "Three", "One", "Two", "Three"];

// console.log(friends);

// const lastIndex = friends.length - 1;

// // console.log(lastIndex);

// // console.log(friends[lastIndex]);

// friends[lastIndex] = "Ten";
// friends[3] = "four";
// friends[4] = "five";

// // console.table(friends);

// // for (let i =  0; i < friends.length; i += 1) {
// //     console.log(friends[i]);
// // };

// for (const friend of friends) {
//     console.log(friend);
// }

// const prise = [0, 1, 3, 10, 5];

// let totalPrise = 0;

// for (let i = 0; i < prise.length; i += 1) {
//   if (prise[i] % 2 === 0) {
//     totalPrise += prise[i];
//   }
// }

// for (let value of prise) {
//   if (value % 2 === 0) {
//     totalPrise += value;
//   }
// }

// for (let value of prise) {
//   if (value % 2 !== 0) {
//     continue;
//   }
//   totalPrise += value;
// }

// console.log(`Total Prise: ${totalPrise}$`);

// const prise = [0, 1, 3, 10, 5];
// const uzer = 11;
// let message=`Користувач ${uzer} не знайдений`;
// if (prise.includes(uzer)) {
//   message = `Користувач ${uzer} знайдений`;
// };

// console.log(message);
//метод інклуд!!! для перевірки чи є певний елемент у масиві!!!

// !!!!!!! ТЕРЕНАРНИК !!!!!!!!!!!!!!
// const uzers = [0, 1, 3, 10, 5];
// const uzer = 11;

// const message = uzers.includes(uzer)
//   ? `Користувач ${uzer} знайдений`
//   : `Користувач ${uzer} не знайдений`;

// console.log(message);

// const numbers = [12, 11, 300, 0, 5];
// let bigestNumber = numbers[0];

// for (let number of numbers) {
//   if (number > bigestNumber) {
//     bigestNumber = number;
//   }
// }

// console.log(`Найбільше число в масиві: ${bigestNumber}`);

// const numbers = [12, 11, 300, 0, 5, 12, 11, 300, 0, 5];
// let message = "";

// for (const number of numbers) {
//   message += number + ", ";
// }

// message = message.slice(0, message.length - 2);
// console.log(`Список чисел:`, message);

// вивести масив списком - метод join!!!!!!
// const numbers = [12, 11, 300, 0, 5, 12, 11, 307];
// const list = numbers.join(", ");
// console.log(`Список чисел:`, list);

// метод split - розбиває рядок на елементи - перетворює в масив!!!

// const language = "JavaScript";
// const languageSplit = language.split("");
// let invertString = "";

// console.log(languageSplit);

// for (const leter of language) {

//   invertString += leter === leter.toUpperCase() ? leter.toLowerCase() : leter.toUpperCase();
// }

// console.log(invertString);

// const title = `Top 10 benefits of work in Horatia`;

// // const normalisedTitle = title.toLowerCase();

// // const mathTitle = normalisedTitle.split(' ');

// // const pageTitle = mathTitle.join('-');
// // console.log(pageTitle);

// !!!!! SHAIN - ланцюжок викликів методів!!!!
// const pageTitle = title.toLowerCase().split(" ").join("-");
// console.log(pageTitle);

// const math1 = [1, 5, 4];
// const math2 = [6, 3, 1];
// let sum1 = 0;
// let sum2 = 0;
// let totalSummary = 0;

// for (const element of math1) {
//   sum1 += element;
// }

// for (const element of math2) {
//   sum2 += element;
// }
// totalSummary = sum1 + sum2;
// console.log(totalSummary);

// !!!!! КОНКАТЕНАЦІЯ !!!!!
// const math1 = [1, 5, 4];
// const math2 = [6, 3, 1];
// let totalSummary = 0;

// const numbers = math1.concat(math2);

// for (const number of numbers) {
//   totalSummary += number;
// }

// console.log(`Загальна сума елементів:`, totalSummary);

//  !!!!!!!!!!!!!SPLISE!!!!!!!!!!!!   ВИДАЛЯЄ ЕЛЕМЕНТ - splice(0, 5) (ІНДЕКС, скільки видалити)
// const numbers = [1, 9, 4, 6, 4, 5];
// console.log(numbers);

// // const numberToRemove = 5;
// // const index = numbers.indexOf(numberToRemove);
// const index = numbers.indexOf(9);
// numbers.splice(index, 1);

// console.log(numbers);

//  !!!!!!!!!!!!!SPLISE!!!!!!!!!!!!   ДОДАЄ ЕЛЕМЕНТ - splice(0, 0, 555, 777) (ІНДЕКС, скільки видалити, які додати)
// const numbers = [1, 9, 4, 6, 4, 5];
// console.log(numbers);

// numbers.splice(0, 0, 555, 666);

// console.log(numbers);


//  !!!!!!!!!!!!!SPLISE!!!!!!!!!!!!   ЗАМІНЮЄ ЕЛЕМЕНТ - splice(0, 0, 555, 777) (ІНДЕКС, скільки видалити, які додати)
// const numbers = [1, 9, 4, 6, 4, 5];
// console.log(numbers);

// numbers.splice(0, 2, 5, 3);

// console.log(numbers);


