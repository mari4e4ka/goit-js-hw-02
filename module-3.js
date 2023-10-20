const arr = [2, 111, 1, 3, 4, 555];
const [first, ...restArr] = arr;
console.log(first);
console.log(restArr);

const newArr = [];
for (const item of restArr) {
    newArr.push(item*first);
}
console.log(newArr);

const max = Math.max(...arr);
const min = Math.min(...arr);
console.log(max);
console.log(min);

