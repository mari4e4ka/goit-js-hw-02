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

const filter = function (array, callback) {
  const filteredArr = [];
  for (const el of array) {
    if (callback(el)) {
      filteredArr.push(el);
    }
  }

  return filteredArr;
};

const isBigNumber = function (value) {
  return value >= 10;
};

const isNegNumber = function (value) {
  return value < 0;
};

console.log(filter([10, 9, 23, -3, 144, 0, -15, 55, 5], isBigNumber));
console.log(filter([10, 9, 23, -3, 144, 0, -15, 55, 5], isNegNumber));

const fruits = [
  {
    name: "apple",
    quantity:0,
    isFresh:false,
  },
  {
    name: "pear",
    quantity:60,
    isFresh:true,
  },
  {
    name: "lemon",
    quantity:120,
    isFresh:false,
  },
];

const isInStore = function(object){
return object.quantity>0;
}

const isFresh =(object)=>{return object.isFresh};
console.log('Список усіх фруктів',fruits);
console.log('Фрукти наявні в магазині',filter(fruits, isInStore));
console.log('Свіжі фрукти',filter(fruits, isFresh));