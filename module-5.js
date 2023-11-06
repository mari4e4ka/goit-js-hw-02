// const showFunction = function () {
//   console.log(`This is this -> `, this);
//   console.log(`This is this.userName -> `, this.userName);
//   console.log(`This is this.userName -> `, this.id);
//   console.log(`This is this.userName -> `, this.country);
// };

// // showFunction();

// const oneObject = {
//   userName: "One",
//   id: 12345,
//   country: "UK",
// };

// const secondObject = {
//   userName: "Two",
//   id: 23456,
//   country: "USA",
// };

// const thirdObject = {
//   userName: "Three",
//   id: 34567,
//   country: "UA",
// };

// oneObject.showFunction=showFunction;
// oneObject.showFunction();

// secondObject.showFunction=showFunction;
// secondObject.showFunction();

// thirdObject.showFunction=showFunction;
// thirdObject.showFunction();

// const oneObject = {
//   userName: "One",
//   id: 12345,
//   country: "UK",
//   showFunction: function () {
//     console.log(`This is this -> `, this);
//     console.log(`This is this.userName -> `, this.userName);
//     console.log(`This is this.userName -> `, this.id);
//     console.log(`This is this.userName -> `, this.country);
//   },
// };

// // showFunction();

// const secondObject = {
//   userName: "Two",
//   id: 23456,
//   country: "USA",
// };

// const thirdObject = {
//   userName: "Three",
//   id: 34567,
//   country: "UA",
// };

// oneObject.showFunction();

// secondObject.showFunction = oneObject.showFunction;
// secondObject.showFunction();

// thirdObject.showFunction = oneObject.showFunction;
// thirdObject.showFunction();

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log((this.value += value));
//   },
//   decrement(value) {
//     console.log((this.value -= value));
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// const counterIncrement=counter.increment.bind(counter);

// const counterDecrement=counter.decrement.bind(counter);

// updateCounter(10, counterIncrement);
// updateCounter(5, counterDecrement);
// updateCounter(5, counterDecrement);
// updateCounter(5, counterDecrement);
// updateCounter(5, counterDecrement);

// updateCounter(10, counterIncrement);


const counter = {
    value: 0,
    increment(value) {
        // console.log('increment -> this', this);
        console.log(this.value += value);
    },
    decrement(value) {
        // console.log('decrement -> this', this);
        console.log(this.value -= value);
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
updateCounter(15, counter.decrement.bind(counter));






// const changeColor = function (color) {
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// console.log(hat);

// hat.changeColor=changeColor;
// hat.changeColor("green");
// console.log(hat);

// changeColor.call(hat, 'orange');
// console.log(hat);


// const changeColor = function (color) {
//     this.color = color;
// };

// const sweater = {
//     color: 'green',
// };

// sweater.changeColor=changeColor;
// sweater.changeColor("grey");
// console.log(sweater);

// changeColor.call(sweater, "red");
// console.log(sweater);

// changeColor.call(sweater, 'blue');
// console.log(sweater);


// const changeColor = function (color) {
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// const sweater = {
//     color: 'green',
// };

// const changeHatColor=changeColor.bind(hat);
// console.log(hat);

// changeHatColor("yellow");
// console.log(hat);
// changeHatColor("black");
// console.log(hat);

// const changeSweaterColor=changeColor.bind(sweater);
// console.log(sweater);

// changeSweaterColor("yellow");
// console.log(sweater);
// changeSweaterColor("black");
// console.log(sweater);



