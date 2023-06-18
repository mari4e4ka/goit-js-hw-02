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
const uzers = [0, 1, 3, 10, 5];
const uzer = 11;

const message = uzers.includes(uzer)
  ? `Користувач ${uzer} знайдений`
  : `Користувач ${uzer} не знайдений`;

console.log(message);
