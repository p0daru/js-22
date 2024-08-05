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

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         console.log('This product is already in the cart', product.name);
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this; // локальна змінна items, в якій лежить посилання на масив (складний тип)

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i]; // деструктуризація

//       if (productName === name) {
//         console.log('знайшли такий продукт', productName);
//         console.log('індекс', i);

//         // деструктивний метод, змінює оригінальний масив
//         items.splice(i, 1); // починаючи з індекса "i" видали один елемент
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (productName === item.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     console.log('No such product');
//   },
//   decreaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (productName === item.name) {
//         item.quantity -= 1;

//         if (item.quantity === 0) {
//           this.remove(productName);
//         }

//         return;
//       }
//     }

//     console.log('No such product');
//   },
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// cart.remove('🍇');
// console.table(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());

// // cart.clear();
// // console.log(cart.getItems());
// // console.log('Total: ', cart.countTotalPrice());

// cart.add({ name: '🍇', price: 70 });
// console.table(cart.getItems());

// cart.increaseQuantity('🍇');
// cart.increaseQuantity('🍇');
// cart.increaseQuantity('🍇');

// console.table(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());

// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍇');

// console.table(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());

// cart.decreaseQuantity('🍇');
// console.table(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const { name } of this.potions) {
      if (newPotion.name === name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potions = this.potions;

    for (const potion of potions) {
      if (potionName === potion.name) {
        const potionIndex = potions.indexOf(potion);

        potions.splice(potionIndex, 1);

        return; // вихід із функції removePotion(potionName)
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
        return;
      }
    }

    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

atTheOldToad.addPotion({ name: 'Speed potion', price: 460 });
atTheOldToad.addPotion({ name: 'Hahah', price: 460 });
// console.log(atTheOldToad.getPotions());

atTheOldToad.removePotion('Hahah');
console.log(atTheOldToad.getPotions());

atTheOldToad.updatePotionName('Speed potion', 'Hahah');
console.log(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName('K0k', 'Hahah');
// console.log(atTheOldToad.getPotions());
