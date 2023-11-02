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

// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i += 1) {
//   total += myArr[i];
// }

// console.log(total);

// РЕКУРСІЯ
// function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   };

//   console.log(multiply([2,2,2,2],4));

// Напишіть рекурсивну функцію sum(arr, n), яка повертає суму перших n елементів масиву arr.

// let sum=0;
// function summary(arr,n){
//     for(let i=0; i<n; i+=1){
//         sum+=arr[i];
//     }
//     return sum;
// }

// console.log(summary([2,2,2,2,2],5));

// function summary(arr,n){
//     if(n<=0){
//         return 0;
//     }else {
//         return summary(arr,n-1)+arr[n-1];
//     }
// }
// console.log(summary([2,2,2,2,2],5));
// console.log(summary([2, 3, 4], 1));

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Змініть код лише під цим рядком
//   let message = ''
//   for (const object of contacts) {
//     if (object.firstName===name){

//         if(object.hasOwnProperty(prop)){
//             message=`${name} likes ${object[prop]}`;break;
//         } else {message='No such property'; break}

//     } else {message = 'No such contact';}
//   }
//   return message;

//   // Змініть код лише над цим рядком
// }

// console.log(lookUpProfile("Krstian", "likes"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Harry", "likes"));
// console.log( lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Bob", "potato"));
// console.log(lookUpProfile("Akira", "address"));

// const countArray = [];
// function countdown(n){
//   if (n < 1) {
//    return countArray;
//  } else {
//    countArray.push(n);
//   countdown((n-1));
//    return countArray;
//  }
// }
// console.log(countdown(10));

// function countdown(n){
//   return n<0 ? [] :[n,...countdown(n-1)];
// }

// console.table(countdown(25));

// function rangeOfNumbers(startNum, endNum) {
//   const result=[];
//   do {
//     result.push(startNum);
//     startNum+=1;
//   }while (startNum<=endNum)
//   return result;
// };

// console.log(rangeOfNumbers(10,100));
// const arr = [];
// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return arr;
//   } else {
//     arr.push(startNum);
//     rangeOfNumbers(startNum + 1,endNum);
//     return arr;
//   }
// }

// console.log(rangeOfNumbers(1,5));

// function rangeOfNumbers(startNum, endNum) {
//   return startNum>endNum? []:[startNum,...rangeOfNumbers(startNum+1,endNum)]
//   }

//   console.log(rangeOfNumbers(2,10));

// Перебираючі методи масивів

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// const contactNames = contacts.map(contact=>contact.firstName);
// console.log(contactNames);
// const contactLikes = contacts.flatMap(contact=>contact.likes);
// console.log(contactLikes);

// const newContacts = contacts.map((contact, idx)=>({...contact, likes: [...contact.likes, "sing"], firstName: `${contact.firstName} ${((idx)+1)}`}));
// console.log(newContacts);

// const newContact = contacts.map((contact, idx)=>{
//     if (contact.firstName==="Harry"){

//         contact.number= "1";
//     }
//     return contact
// });
// console.log(newContact);

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];
// console.table(contacts);

// const updateContactsLikes = contacts.map((contact) => {
//   return contact.firstName === "Harry"
//     ? { ...contact, likes: [...contact.likes, "sing"] }
//     : contact;
// });

// console.table(updateContactsLikes);

// const updateContactsNumber = contacts.map((contact) =>
//   contact.firstName === "Harry"
//     ? { ...contact, number: contact.number + 1111 }
//     : contact
// );

// console.table(updateContactsNumber);

// console.log([1,2,3,4,5,6,7,8,9,10].map(num=>num*10));

// const up10=[1,2,3,4,5,6,7,8,9,10].map(num=>num*10);
// console.log(up10);

// const arr1=[1,2,3,4,5,6,7,8,9,10];
// const arr2 =[2,2,2,2,2,2,2,2,2,2];

// const increaseByANumber=(arr,num)=>arr.map(item=>item*num);

// console.log(increaseByANumber(arr1,1));
// console.log(increaseByANumber(arr1,2));
// console.log(increaseByANumber(arr1,10));
// console.log(increaseByANumber(arr1,100));

// console.log(increaseByANumber(arr2,1));
// console.log(increaseByANumber(arr2,2));
// console.log(increaseByANumber(arr2,10));
// console.log(increaseByANumber(arr2,100));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const bigNum = arr.filter((number) => number > 5);
// console.log(bigNum);

// console.table(contacts);

// const contactsIsOnline = contacts.filter((contact) => contact.isOnline);
// console.table(contactsIsOnline);

// const contactsIsOffline = contacts.filter((contact) => !contact.isOnline);
// console.table(contactsIsOffline);

// console.table(contacts);

// const contactsIsOnline = contacts.filter(({isOnline}) => isOnline);
// console.table(contactsIsOnline);

// const contactsIsOffline = contacts.filter(({isOnline}) => !isOnline);
// console.table(contactsIsOffline);

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//     isOnline: true,
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//     isOnline: false,
//   },
// ];

// // const potterContact = contacts.find(({lastName})=>lastName==="Potter");
// // console.log(potterContact);

// const findContactByLastName = (contacts, contactToFind) =>
//   console.log(contacts.find(({lastName}) => lastName === contactToFind));

// findContactByLastName(contacts, "Potter");
// findContactByLastName(contacts, "Laine");
// findContactByLastName(contacts, "Piter");

// const arr1=[1,2,3,4,5,6,7,8,9,10];
// const arr2 =[2,2,2,2,2,2,2,2,2,2];

// // const total1 = arr1.reduce((acc,num)=>acc+=num,0);
// // console.log(total1);

// // const total2 = arr2.reduce((acc,num)=>acc+=num,0);
// // console.log(total2);

// const total = arr => console.log(arr.reduce((acc,num)=>acc+num));

// total(arr1);
// total(arr2);

// const salary = {
//   1:100,
//   2:200,
//   3:300,
// }

// // const objectValues = Object.values(salary);
// // console.log(objectValues);

// const totalSalary = Object.values(salary).reduce((total,salary)=>acc+salary,0);

// console.log(totalSalary);

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: 230,
//     likes: ["Pizza", "Coding", "Brownie Points"],
//     isOnline: true,
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: 150,
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//     isOnline: false,
//   },
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: 230,
//     likes: ["Pizza", "Coding", "Brownie Points"],
//     isOnline: true,
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: 150,
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//     isOnline: false,
//   },
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: 230,
//     likes: ["Pizza", "Coding", "Brownie Points"],
//     isOnline: true,
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: 150,
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//     isOnline: false,
//   },
// ];

// const totalNumber = contacts.reduce(
//   (total, { number }) => total + number,
//   0
// );

// console.log(`Загальний номер: ${totalNumber}`);

// const fruits = [
//   {
//     name: "apple",
//     quantity: 10,
//     price: 10,
//     isFresh: false,
//   },
//   {
//     name: "pear",
//     quantity: 6,
//     price: 100,
//     isFresh: true,
//   },
//   {
//     name: "lemon",
//     quantity: 12,
//     price: 60,
//     isFresh: false,
//   },
// ];

// const totalPrice = fruits.reduce(
//   (total, {price,quantity}) => total + price * quantity,
//   0
// );

// console.log(`Загальна вартість: ${totalPrice}`);

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//     isOnline: true,
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//     isOnline: false,
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//     isOnline: false,
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//     isOnline: false,
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//     isOnline: false,
//   },
// ];

// // const allLikes = contacts.reduce((likes, contact) => {
// //   likes.push(...contact.likes);
// //   return likes;
// // }, []);
// // console.log(allLikes);

// const allLikes = contacts.reduce(
//   (likes, contact) => [...likes, ...contact.likes],
//   []
// );
// console.log(allLikes);

// // const stat = allLikes.reduce((statAcc, like)=>{
// //     if(statAcc[like]){
// //         statAcc[like]+=1;
// //         return statAcc;
// //     }
// //     statAcc[like]= 1;
// //     return statAcc;
// // },{});
// // console.table(stat);

// // const stat = allLikes.reduce((statAcc, like) => {
// //   statAcc[like] ? (statAcc[like] += 1) : (statAcc[like] = 1);
// //   return statAcc;
// // }, {});
// // console.table(stat);

// const stat = allLikes.reduce(
//   (rezAcc, like) => ({
//     ...rezAcc,
//     [like]: rezAcc[like] ? rezAcc[like] + 1 :  1,
//   }),
//   {}
// );
// console.table(stat);

const cars = [
  { make: "Honda", model: "CR-6", amound: 14, price: 24000, onSale: true },
  { make: "Opel", model: "Op-6", amound: 1, price: 10000, onSale: true },
  { make: "Mazda", model: "Mz-6", amound: 4, price: 44000, onSale: false },
];
console.table(cars);

// const models = cars.map((car) => car.model);
// console.log(models);

const carsWithDiscount = (arr, disc) => arr.map((item) => {item.price=item.price -(item.price* disc);
return item});

console.table(carsWithDiscount(cars, 0.1));
