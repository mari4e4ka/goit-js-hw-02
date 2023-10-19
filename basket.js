const basket = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let totalPrice = 0;
    for (const { price, quantity } of this.items) {
      totalPrice += price * quantity;
    }
    return `Вартість товарів у кошику: ${totalPrice} грн.`;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (productName === item.name) {
        item.quantity += 1;
        return item.quantity;
      }
    }
  },
  decreseQuantity(productName) {
    for (const item of this.items) {
      if (productName === item.name) {
        if (item.quantity > 0) {
          item.quantity -= 1;
        }
      }
    }
  },
};

basket.add({ name: "apple", price: 50 });
basket.add({ name: "pear", price: 70 });
basket.add({ name: "lemon", price: 60 });
basket.add({ name: "cherry", price: 100 });
basket.add({ name: "lemon", price: 60 });
basket.add({ name: "cherry", price: 100 });

console.table(basket.getItems());
console.log(basket.countTotalPrice());

basket.remove("lemon");
console.table(basket.getItems());
console.log(basket.countTotalPrice());

basket.clear();
console.table(basket.getItems());
console.log(basket.countTotalPrice());

basket.add({ name: "lemon", price: 60 });
basket.add({ name: "cherry", price: 100 });

console.table(basket.getItems());

console.log(basket.countTotalPrice());

console.log (`Кількість лимонів у кошику =`, basket.increaseQuantity("lemon"));
console.table(basket.getItems());
console.log(basket.countTotalPrice());

basket.increaseQuantity("lemon");
console.table(basket.getItems());
console.log(basket.countTotalPrice());

basket.increaseQuantity("lemon");
console.table(basket.getItems());
console.log(basket.countTotalPrice());

basket.decreseQuantity("lemon");
console.table(basket.getItems());
console.log(basket.countTotalPrice());

basket.decreseQuantity("cherry");
console.table(basket.getItems());
console.log(basket.countTotalPrice());

basket.decreseQuantity("cherry");
console.table(basket.getItems());
console.log(basket.countTotalPrice());

basket.add({ name: "apple", price: 50 });
basket.add({ name: "pear", price: 70 });
basket.add({ name: "lemon", price: 60 });
basket.add({ name: "cherry", price: 100 });
basket.add({ name: "lemon", price: 60 });
basket.add({ name: "cherry", price: 100 });

console.table(basket.getItems());
console.log(basket.countTotalPrice());

