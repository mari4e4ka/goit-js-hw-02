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

// const counter = {
//     value: 0,
//     increment(value) {
//         // console.log('increment -> this', this);
//         console.log(this.value += value);
//     },
//     decrement(value) {
//         // console.log('decrement -> this', this);
//         console.log(this.value -= value);
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// updateCounter(15, counter.decrement.bind(counter));

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

// const objA = {
//     age:22,
//     showObj (){
//         console.log(this);
//         const foo= ()=>{
//             console.log(this);

//         }
//         foo();
//     }
// }

// objA.showObj();

// const objA = {
//     age:22,
//     showObj (){
//         // console.log(this);
//         function foo (){
//             console.log(this);

//         }
//         foo();
//     }
// }

// objA.showObj();

// const fruitStorage = {
//   fruits: [
//     {
//       name: "apple",
//       quantity: 10,
//       price: 10,
//       isFresh: false,
//     },
//     {
//       name: "pear",
//       quantity: 6,
//       price: 100,
//       isFresh: true,
//     },
//     {
//       name: "lemon",
//       quantity: 12,
//       price: 60,
//       isFresh: false,
//     },
//   ],
//   //   countTotalPrice(fruitName) {
//   //     for (const fruit of this.fruits) {
//   //         let totalPrice;
//   //         if(fruit.name===fruitName){
//   //             totalPrice=fruit.price*fruit.quantity;
//   //         return totalPrice;
//   //         }

//   //     }
//   //   },

//   // countTotalPrice(fruitName) {
//   //    const item= this.fruits.find(({name})=>name===fruitName);
//   //    return item.price*item.quantity;
//   // }

//   countTotalPrice(fruitName) {
//     const { quantity, price } = this.fruits.find(
//       ({ name }) => name === fruitName
//     );
//     return price * quantity;
//   },
// };

// console.log(fruitStorage.countTotalPrice("apple"));
// console.log(fruitStorage.countTotalPrice("pear"));
// console.log(fruitStorage.countTotalPrice("lemon"));

// // const {price, quantity}=fruitStorage.fruits.find((fruit)=>fruit.name==="apple");
// // const {price, quantity}=fruitStorage.fruits.find(({name})=>name==="lemon");

// // console.log(price);
// // console.log(quantity);

// const{name, quantity,price,isFresh}=    {
//     name: "lemon",
//     quantity: 12,
//     price: 60,
//     isFresh: false,
//   };

//   console.log(name);
//   console.log(price);
//   console.log(quantity);
//   console.log(isFresh);

// const fruitStorage = {
//   fruits: [
//     {
//       name: "apple",
//       quantity: 10,
//       price: 10,
//       isFresh: false,
//     },
//     {
//       name: "pear",
//       quantity: 6,
//       price: 100,
//       isFresh: true,
//     },
//     {
//       name: "lemon",
//       quantity: 12,
//       price: 60,
//       isFresh: false,
//     },
//   ],

//   countTotalPrice(fruitName) {
//     const { quantity, price } = this.fruits.find(
//       ({ name }) => name === fruitName
//     );
//     return `Загальна вартість всіх ${fruitName} на складі ${
//       price * quantity
//     } грн`;
//   },
// };

// const fruitStorage2 = {
//   fruits: [
//     {
//       name: "banana",
//       quantity: 100,
//       price: 30,
//       isFresh: false,
//     },
//     {
//       name: "peach",
//       quantity: 12,
//       price: 80,
//       isFresh: true,
//     },
//     {
//       name: "cherry",
//       quantity: 120,
//       price: 160,
//       isFresh: false,
//     },
//   ],
// };

// console.log(fruitStorage.countTotalPrice("apple"));
// console.log(fruitStorage.countTotalPrice("pear"));
// console.log(fruitStorage.countTotalPrice("lemon"));

// //   console.log(fruitStorage.countTotalPrice.call(fruitStorage2,"banana"));
// //   console.log(fruitStorage.countTotalPrice.call(fruitStorage2,"peach"));
// //   console.log(fruitStorage.countTotalPrice.call(fruitStorage2,"cherry"));

// const calcFunction2 = fruitStorage.countTotalPrice.bind(fruitStorage2);

// console.log(calcFunction2("cherry"));
// console.log(calcFunction2("peach"));
// console.log(calcFunction2("banana"));

// const calk = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {return `${this.a} + ${this.b} = ${this.a+this.b}`},
//   mult() {return `${this.a} * ${this.b} = ${this.a*this.b}`},
// };
// console.log(calk);
// calk.read(5,5);
// console.log(calk);
// console.log(calk.add());
// console.log(calk.mult());

// const calk = {
//     read(a, b) {
//       this.a = a;
//       this.b = b;
//     },
//     add() {return (this.a??0)+(this.b??0)},
//     mult() {return (this.a??1)*(this.b??1)},
//   };
//   console.log(calk);
//   calk.read(5,-1);
//   console.log(calk);
//   console.log(calk.add());
//   console.log(calk.mult());

// const objC={c:10,};
// console.log(objC);

// const objB=Object.create(objC);
// console.log(objB);

// objB.b=100;

// console.log(objB);

// console.log(`objC.c - `,objC.c);
// console.log(`objB.b - `,objB.b);
// console.log(`objB.c - `,objB.c);
// console.log(`objC.b - `,objC.b);

// const objA=Object.create(objB);
// console.log(objA);

// objA.a=1000;
// console.log(objA);

// console.log(objA.hasOwnProperty("b"));

// const Car = function (brand, model, price) {
//     this.brand=brand;
//     this.model=model;
//     this.price=price;
// };
// console.log(Car);

// const newCar1 = new Car("audi", "a-6", 43000);

// const newCar2 = new Car("honda", "h-10", 54000);

// console.log(newCar1);
// console.log(newCar2);

// const Car = function ({price,model,brand}={}) {
// // const {price,model,brand}=config;

//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// Car.prototype.changePrice=function(newPrice){
//     this.price=newPrice;
// };

// console.log(Car);

// const car1 = new Car({ brand: "audi", model: "a-6", price: 43000 });
// console.log(car1);

// car1.changePrice(49000);
// console.log(car1);

// const car2 = new Car({ brand: "honda", model: "h-10", price: 54000 });
// car2.changePrice(58000)
// console.log(car2);

// const User = function ({ name, mail, password }={}) {
//   this.name = name;
//   this.mail = mail;
//   this.password = password;
// };

// User.prototype.changeMail = function (newMail) {
//   this.mail = newMail;
// };

// User.prototype.changePassword = function (newPassword) {
//   this.password = newPassword;
// };

// const userMango = new User({
//   name: "Mango",
//   mail: "mango@mail.com",
//   password: "1234",
// });

// console.table(userMango);

// userMango.changeMail("mango@supermail.com");

// console.table(userMango);

// userMango.changePassword("5678");

// console.table(userMango);

// User.showUser=function(user){
//     console.log(`Користувач: `, user.name);
//     console.log(`Пошта: `, user.mail);
// }

// User.showUser(userMango);
// console.log(userMango);
// console.log(User.prototype);

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this._price = price;
//   }

//   get price(){
//     return this._price;
//   }

//   set price(newPrice){
//     this._price=newPrice;
//   }
// }

// console.log(Car);

// const car1 = new Car({ brand: "audi", model: "a-6", price: 43000 });
// console.log(car1);

// console.log(car1.price);
// car1.price=50000;

// console.log(car1.price);



// class Vehicle {
//       constructor({ brand, price }) {
//         this.brand = brand;
//         this._price = price;
//       }
    
//       get price(){
//         return console.log(this._price);;
//       }
    
//       set price(newPrice){
//        this._price=newPrice;
//        return console.log(this._price);
//       }
//     }

//     class Car extends Vehicle {
//         constructor({ brand, price,model}){
//             super({brand,price})
//             this._model = model;
//         }

//         get model(){
//             return console.log(this._model);;
//           }
        
//           set model(newModel){
//             this._model=newModel;
//             return console.log(this._model);
//           }

//         getBrand(){
//             return console.log(this.brand);
//         }
//     }
    

//     const car1 = new Car({ brand: "audi", price: 43000, model: "a-6" });
//     console.log(car1);


//     // car1.model;
//     // car1.model="a-8";

//     // car1.price;
//     // car1.price=60000;


//     const car2 ={ brand: "bmw", price: 33000, model: "b-6" };
//     console.log(`car2`, car2);






// class Vehicle {
//       constructor({ brand, price }) {
//         this.brand = brand;
//         this._price = price;
//       }
    
//       get price(){
//         return console.log(this._price);;
//       }
    
//       set price(newPrice){
//        this._price=newPrice;
//        return console.log(this._price);
//       }
//     }

//     class Car extends Vehicle {
//         constructor({ model, ...restProps}){
//             super(restProps)
//             this._model = model;
//         }

//         get model(){
//             return console.log(this._model);;
//           }
        
//           set model(newModel){
//             this._model=newModel;
//             return console.log(this._model);
//           }

//     }
    

    const car1 = new Car({ brand: "audi", price: 43000, model: "a-6" });
    console.log(car1);

