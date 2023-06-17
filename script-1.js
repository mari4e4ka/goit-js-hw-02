const friends = ["One", "Two", "Three", "One", "Two", "Three"];

console.log(friends);

const lastIndex = friends.length - 1;

// console.log(lastIndex);

// console.log(friends[lastIndex]);

friends[lastIndex] = "Ten";
friends[3] = "four";
friends[4] = "five";

// console.table(friends);

// for (let i =  0; i < friends.length; i += 1) {
//     console.log(friends[i]);
// };

for (const friend of friends) {
    console.log(friend);
}

