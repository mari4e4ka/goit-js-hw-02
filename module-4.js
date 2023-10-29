// const doMath = function(a,b, callback){
//     const result = callback(a,b);
//     console.log(result);
// };

// const plus = function(a,b){
//     return a+b;
// };

// const minus = function(x,y){
//     return x-y;
// };

// const mult = (a,b) => {return a*b};
// const div = (a,b) => {return a/b};

// doMath(5,4,plus);
// doMath(5,4,minus);
// doMath(5,4,mult);
// doMath(5,4,div);

// const doMath = function(a,b, callback){
//     const result = callback(a,b);
//     console.log(result);
// };

// doMath(5,4,function(a,b){return a+b;});
// doMath(5,4,function(x,y){return x-y;});
// doMath(5,4,(a,b) => {return a*b});
// doMath(5,4,(a,b) => {return a/b});

// const button = document.querySelector('.js-button');

// const clickOnButton = function(){
//     console.log('Hello!!!!', Date.now());
// }

// button.addEventListener('click',clickOnButton);

// const callback = function(){
//     console.log('Таймаут!!!!!')
// };

// console.log('Перед таймаутом');

// setTimeout(callback,5000);

// console.log('Після таймауту');

// const filter = function (array, callback) {
//   const filteredArr = [];
//   for (const el of array) {
//     if (callback(el)) {
//       filteredArr.push(el);
//     }
//   }

//   return filteredArr;
// };

// const isBigNumber = function (value) {
//   return value >= 10;
// };

// const isNegNumber = function (value) {
//   return value < 0;
// };

// console.log(filter([10, 9, 23, -3, 144, 0, -15, 55, 5], isBigNumber));
// console.log(filter([10, 9, 23, -3, 144, 0, -15, 55, 5], isNegNumber));

// const fruits = [
//   {
//     name: "apple",
//     quantity:0,
//     isFresh:false,
//   },
//   {
//     name: "pear",
//     quantity:60,
//     isFresh:true,
//   },
//   {
//     name: "lemon",
//     quantity:120,
//     isFresh:false,
//   },
// ];

// const isInStore = function(object){
// return object.quantity>0;
// }

// const isFresh =(object)=>{return object.isFresh};
// console.log('Список усіх фруктів',fruits);
// console.log('Фрукти наявні в магазині',filter(fruits, isInStore));
// console.log('Свіжі фрукти',filter(fruits, isFresh));

// const filter = (array, callback) => {
//   const filteredArr = [];
//   for (const el of array) {
//     if (callback(el)) {
//       filteredArr.push(el);
//     }
//   }

//   return filteredArr;
// };

// const isBigNumber = (value) => value >= 10;

// const isNegNumber = (value) => value < 0;

// console.log(filter([10, 9, 23, -3, 144, 0, -15, 55, 5], isBigNumber));
// console.log(filter([10, 9, 23, -3, 144, 0, -15, 55, 5], isNegNumber));

// const fruits = [
//   {
//     name: "apple",
//     quantity: 0,
//     isFresh: false,
//   },
//   {
//     name: "pear",
//     quantity: 60,
//     isFresh: true,
//   },
//   {
//     name: "lemon",
//     quantity: 120,
//     isFresh: false,
//   },
// ];

// const isInStore = (object) => object.quantity > 0;

// const isFresh = (object) => object.isFresh;

// console.log("Список усіх фруктів", fruits);
// console.log("Фрукти наявні в магазині", filter(fruits, isInStore));
// console.log("Свіжі фрукти", filter(fruits, isFresh));

// const foo = () => "Mango";
// console.log(foo());

// function nextInLine(arr, item) {
//   arr.push(item);
//   const item1 = arr[0];
//   arr.shift();
//   return item1;
// }

// const testArr = [1, 2, 3, 4, 5];

// console.log(nextInLine(testArr, 10));

// console.log(testArr);
// console.log(testArr[4]);

// function caseInSwitch(val) {
//   let answer = "";
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }

//   return answer;
// }
// console.log(caseInSwitch(3));

// function caseInSwitch(val) {
//   let answer = "";
//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break;
//     case "c":
//       answer = "cat";
//       break;
//     default:
//         answer ="stuff";
//       break;
//   }

//   return answer;
// }
// console.log(caseInSwitch("h"));

// function sequentialSizes(val) {
//   let answer = "";
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//       break;
//     default:
//       answer = "uncorect number";
//   }

//   // Змініть код лише над цим рядком
//   return answer;
// }

// sequentialSizes(8);

// console.log(sequentialSizes(2));

// Зміна рахунку	Карти
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'К', 'A'
// Ви писатимете функцію підрахунку карт.
// Вона отримає параметр card, який може бути числом або рядком, а також збільшуватиме
// або зменшуватиме глобальну змінну count, відповідно до значення карти (див. таблицю).
// Тоді функція поверне рядок з поточним підрахунком і рядок Bet, якщо підрахунок більше нуля,
// або Hold, якщо підрахунок дорівнює або менше нуля. Між поточним підрахунком та рішенням гравця
// (Bet або Hold) повинен бути один пробіл.

// Приклад виводів: -3 Hold або 5 Bet

// let count = 0;

// function cc(card) {
//   if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
//     count += 1;
//   } else if (
//     card === 10 ||
//     card === "A" ||
//     card === "K" ||
//     card === "Q" ||
//     card === "J"
//   ) {
//     count -= 1;
//   } 

//   return count>0? `${count} Bet`:`${count} Hold`;
//   // Змініть код лише над цим рядком
// }

// console.log(cc(7));
// console.log(cc(8));
// console.log(cc(9));
// console.log(cc("K"));
// console.log(cc("A"));
// console.log(cc("K"));
// console.log(cc("A"));
// console.log(cc("K"));
// console.log(cc("A"));


// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);


// Функція updateRecords приймає 4 аргументи, представлені такими параметрами функції:

// records — об’єкт, що містить декілька окремих альбомів
// id — число, що позначає певний альбом в об’єкті records
// prop — рядок, що позначає назву властивості альбому, яку потрібно оновити
// value — рядок, що містить інформацію, яка використовується для оновлення властивості альбому
// Завершіть функцію, використовуючи правила нижче, щоб змінити об’єкт, переданий до функції.


//  Потім додайте value як останній елемент у масиві tracks альбому.
// Примітка: копія об’єкту recordCollection використовується для тестів. Ви не повинні напряму змінювати об’єкт recordCollection.

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     // tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (value===""){
//     delete records[id][prop];
//   }  else if (prop!=="tracks") {
//     records[id][prop]=value;
//   }else if (prop==="tracks") {
//     if(!records[id].hasOwnProperty("tracks"))
//     {records[id].tracks=[];
//       records[id].tracks.push(value);
//       return records;
//     }
//     records[id].tracks.push(value);
//   };
//   return records;
// }

// console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
// console.log(updateRecords(recordCollection, 1245, "tracks", "Ad"));

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


