// const friends = [{ name: "Enn" }, { name: "Bob" }, { name: "Mery" }];

// function findFriendByName(arr, friendName) {
//   for (const value of arr) {
//     if (value.name === friendName)
//       return console.log(`${friendName} is in your's friends list`);
//   }
//   console.log(`${friendName} isn't in your's friends list`);
// }

// findFriendByName(friends, "Harry");
// findFriendByName(friends, "Enn");
// findFriendByName(friends, "Mery");

// const friends = [{ name: "Enn" }, { name: "Bob" }, { name: "Mery" }];

// function friendsNames(arr) {
//   const friendsList = [];

//   for (const arrg of arr) {
//     friendsList.push(arrg.name);
//   }

// //   console.log(`My friends: ${friendsList}`);
// console.log(friendsList);
// }

// friendsNames(friends);

// const friends = [
//   { name: "Enn", online: false },
//   { name: "Bob", online: true },
//   { name: "Mery", online: false },
// ];

// function isOnline(arr) {
//   const isOnlineList = [];

//   for (const arrg of arr) {
//     if (arrg.online){
//           isOnlineList.push(arrg);
//     }

//   }

//   console.log(isOnlineList);
// }

// isOnline(friends);

// const user = {
//   name: "Alex",
//   hobby: "html",
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// console.log(user);

// const keys = Object.keys(user);
// console.log(keys);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// for (const key in user) {
//  console.log(key,': ', user[key]);
// }

// const salaries = {
//   worker1: 100,
//   worker2: 160,
//   worker3: 130,
// };

// let sum = 0;
// const salariesList = Object.values(salaries);
// for(const value of salariesList){
//   sum+=value;
// }
// console.log(`Сума зарплат за поточний місяць = ${sum}$`);

// for (const key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

const stone = [
  {
    name: "Gold",
    price: 1300,
    quantity: 2,
  },
  {
    name: "Silver",
    price: 300,
    quantity: 10,
  },
];

function calcTotalPrice (stone){

  for(let i=0; i<stone.lenght; i+=1){
    const totalPrice = stone[i].price*stone[i].quantity;
  console.log(`Загальна вартість = ${totalPrice}` )
  }
}

calcTotalPrice (stone);
