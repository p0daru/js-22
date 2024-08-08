/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log(number);
// });

// const fruits = ['apple', 'banana', 'orange'];

// function addFruitsToTheCart(fruits) {
//   const cart = [];

//   function callback(fruit) {
//     if (fruit === 'banana') {
//       cart.push(fruit);
//     }
//   }

//   fruits.forEach(callback); // всередині колбек-функція

//   return cart;
// }

// console.log(addFruitsToTheCart(fruits));

// const ages = [18, 19, 15, 20, 35, 89, 14, 63, 10, 108];

// ages.forEach((age, index, array) => {
//   array[index] += 5;
// });

// console.log(ages);
