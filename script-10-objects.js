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

const friends = [
  { name: "Enn", online: false },
  { name: "Bob", online: true },
  { name: "Mery", online: false },
];

function isOnline(arr) {
  const isOnlineList = [];

  for (const arrg of arr) {
    if (arrg.online){
          isOnlineList.push(arrg);  
    }

  }

  console.log(isOnlineList);
}

isOnline(friends);
