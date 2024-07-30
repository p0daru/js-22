/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {}, // збільшити к-сть певного продукту в корзині
  decreaseQuantity(productName) {}, // зменшити к-сть певного продукту в корзині
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

cart.remove('🍎');
// console.table(cart.getItems());

cart.clear(); // очистити корзину
// console.table(cart.getItems());

cart.countTotalPrice();

// const cart = {
//   items: [
//     { name: '🍎', price: 50 },
//     { name: '🍇', price: 70 },
//     { name: '🍋', price: 60 },
//     { name: '🍓', price: 110 },
//   ],
//   getItems() {
//     const items = [];
//     for (const item of this.items) {
//       if (!item.quantity) {
//         item.quantity = 1;
//       }
//       items.push(item);
//     }
//     return items;
//   },
//   add(product) {
//     product.quantity = 1;
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         const index = this.items.indexOf(item);
//         this.items.splice(index, 1);
//         continue;
//       }
//     }
//   },
//   clear() {
//     for (const item of this.items) {
//       this.items.splice(0);
//     }
//   },
//   countTotalPrice() {
//     let totalPrice = 0;
//     for (const item of this.items) {
//       totalPrice += item.price;
//     }
//     return totalPrice;
//   },
//   increaseQuantity(productName) {
//     const names = [];

//     for (const item of this.items) {
//       names.push(item.name);
//     }

//     if (names.includes(productName)) {
//       for (const item of this.items) {
//         if (item.name === productName) {
//           item.quantity += 1;
//         }
//       }
//     } else {
//       switch (productName) {
//         case '🍎':
//           return this.add({ name: '🍎', price: 50 });
//         case '🍋':
//           return this.add({ name: '🍋', price: 50 });
//         case '🍇':
//           return this.add({ name: '🍇', price: 70 });
//         case '🍓':
//           return this.add({ name: '🍓', price: 110 });
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity -= 1;

//         if (item.quantity === 0) {
//           this.remove(productName);
//         }
//       }
//     }
//   },
// };

// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// console.log('CLEAR');
// cart.clear();
// console.table(cart.getItems());

// console.log('INCR');
// cart.increaseQuantity('🍋');
// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍇');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍎');
// cart.decreaseQuantity('🍎');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());
