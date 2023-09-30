// const question = prompt("Яка офіційна назва Java Script?");
// console.log (question);
// let message;

// if (question === "ECMAScript") {
//   message = alert("Так, вірно!");
// } else {
//   message = alert("Не вірно! Правильна відповідь - ECMAScript!");
// }

// const number = Number(prompt("Введіть число"));

// if (number > 0) {
//   alert("Це додатнє число");
// } else if (number == 0) {
//   alert("Це нуль");
// } else {
//   alert("Це відємне число");
// }

// const a = 130;
// const b = 8;

// if (a>100 && b>100) {
//     console.log (a>b ? a : b);
// }
// console.log (b*2);

let link = "https://meta.ua/mail";

if (!link.endsWith("/")) {
  link += "/";
}

console.log(link);
