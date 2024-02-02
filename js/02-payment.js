/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i]; // i - це індекс!!!!!; cart[i] - елемент
// }
// console.log(`Сума: ${total}`);

// 2 зробить змінну до циклу
let total = 0;

// 1 перебрати масив
// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);

//   // 3 кожен елемент додать до тотал
//   total += cart[i];  //  cart[i] НЕ ЗМІНЮЄТЬСЯ
// }

//  Доступ до лічильника не треба, cart[i] НЕ ЗМІНЮЄТЬСЯ => for of
// for (const value of cart) {
//   total += value;
// }

// console.log(total);

// // Add tax
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);
