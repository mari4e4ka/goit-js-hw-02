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

// let link = "https://meta.ua/mail";

// if (!link.endsWith("/")) {
//   link += "/";
// }

// console.log(link);

// let link = "https://my-site.com/about";

// if (!link.endsWith("/") && link.includes('my-site')) {
//   link += "/";
// }

// console.log(link);

// let link = "https://my-site.com/about";

// !link.endsWith("/") && link.includes('my-site') ? console.log(link += "/") : console.log(link);

// console.log(!link.endsWith("/") && link.includes('my-site') ? link += "/" : link);

const min = 24;
const max = 76;
console.log (min, max);

for (let i = min; i<= max; i += 1) {
  if (!(i % 5)) {
    console.log(i);
  }
}

// const logIn = prompt("Ви хто?");

// if (logIn === "адмін") {
//   const pasword = prompt("Введіть пароль");
//   pasword === "я адмін"
//     ? console.log("Привіт!")
//     : console.log("Невірний пароль!");
// } else if (!logIn) {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }
