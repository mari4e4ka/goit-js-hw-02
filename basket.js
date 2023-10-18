const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName){},
  clear(){},
  countTotalPrice(){},
  increaseQuantity(productName){},
  decreseQuantity(productName){},
};

console.table(cart.getItems());

cart.add({nane:'apple', price:50});
cart.add({nane:'pear', price:70});
cart.add({nane:'lemon', price:60});
cart.add({nane:'cherry', price:100});