//----- TEST 18 -----//
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// // !!! return - це вихід з функції, після виконання return далі код у функції не виконується
// // а continue - це перехід до наступної ітерації, після всіх ітерацій код у функції після циклу виконується
// // break – вихід з циклу, далі відразу виконується код після циклу

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     console.log(product);
//     if (product.name === productName) {
//       return product.price; // вихід з функції, якщо виконується – код функції далі не виконається
//     }
//   }
//   return null; // вихід з функції, якщо вище false і попередній return не спрацював
//   // Change code above this line
// }

// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

//----- TEST 19 -----//
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = [];

//   for (const product of products) {
//     switch (propName) {
//       case 'name':
//         values.push(product.name);
//         break;
//       case 'price':
//         values.push(product.price);
//         break;
//       case 'quantity':
//         values.push(product.quantity);
//         break;
//     }
//   }

//   return values;
//   // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('category'));

//----- TEST 20 -----//
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;

//   // Change code above this line
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Grip'));

//----- TEST 27 (Spread) -----//
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// const word = 'letters';
// const spreadLetters = [...word]; // масив букв
// const jointLetters = spreadLetters.join('');

// console.log(jointLetters);

//----- TEST 29 (Spread) -----//
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propC: 50, propD: 20, propA: 5, propB: 10 }

//----- TEST 30 (Spread) -----//
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line

//   return { category, priority, ...data, completed };
//   // Change code above this line
// }

// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   }),
// );
// // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// console.log(makeTask({ text: 'Buy bread' }));
// // { category: "General", priority: "Normal", text: "Buy bread", completed: false }

//----- TEST 31 (REST) -----//
// Change code below this line
// function add(...args) {
//   let totalSum = 0;

//   for (const arg of args) {
//     totalSum += arg;
//   }

//   return totalSum;
//   // Change code above this line
// }

// console.log(add(15, 27)); // 42
// console.log(add(32, 6, 13, 19, 8)); // 78

//----- TEST 33 (REST) -----//
// Change code below this line
// function findMatches(massive, ...otherArgs) {
//   const matches = []; // Don't change this line

//   for (const arg of otherArgs) {
//     if (massive.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // 1,2
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // []

//----- TEST 35 -----//
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);

//     this.books.splice(bookIndex, 1, newName);

//     return this.books;
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles')); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook('The last kingdom', 'Dune')); // ["Dune", "Haze", "The guardian of dreams"]

//----- TEST 40 -----//
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     return this.potions;

//     // Change code above this line
//   },
// };

// //["Speed potion", "Polymorth", "Stone skin"]
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// // ["Speed potion", "Polymorth", "Invisibility"]
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));

//----- TEST 41 -----//
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     // let names = [];

//     // for (const potion of this.potions) {
//     //   names.push(potion.name);
//     // }

//     // if (names.includes(newPotion.name)) {
//     //   return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     // }

//     // this.potions.push(newPotion);

//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);

//         this.potions.splice(potionIndex, 1);

//         return this.potions;
//       }
//     }

//     return `Potion ${potionName.name} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         // const potionIndex = this.potions.indexOf(potion);
//         // this.potions.splice(potionIndex, 1, newName);
//         return this.potions;
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// + [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.getPotions());

//+ "Error! Potion Dragon breath is already in your inventory!"
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));

//+ "Error! Potion Stone skin is already in your inventory!"
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

//+ [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.removePotion('Dragon breath'));

//+ [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// console.log(atTheOldToad.removePotion('Speed potion'));

// //[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// [
//   { name: 'Speed potion', price: 460 },
//   { name: 'Dragon breath', price: 780 },
//   { name: 'Invulnerability potion', price: 520 },
// ];
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'),
// );

//----- ПАТЕРН "ОБ`ЄКТ ПАРАМЕТРІВ" -----//

// відразу оголошувать в параметрах об`єкт
// function doStuffWithBook (book) {
//   console.log(book.title);
//   console.log(book.numberOfPages);
// };

// doStuffWithBook({
//   title: 'It didnt start with you',
//   author: 'Mark Wolynn',
//   numberOfPages: 274,
//   downloads: 200,
//   rating: 5.0,
//   isPublic: true,
// });

// варіант-2
// function doStuffWithBook(book) {
//   const { title, numberOfPages, author } = book; // оголошення в довільному порядку
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(author);
// }

// doStuffWithBook({
//   title: 'It didnt start with you',
//   author: 'Mark Wolynn',
//   numberOfPages: 274,
//   downloads: 200,
//   rating: 5.0,
//   isPublic: true,
// });

// варіант-3
// function doStuffWithBook({ title, numberOfPages, author }) {
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(author);
// }

// doStuffWithBook({
//   title: 'It didnt start with you',
//   author: 'Mark Wolynn',
//   numberOfPages: 274,
// });
