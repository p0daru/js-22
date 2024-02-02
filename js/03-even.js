/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// 1 total
let total = 0;

// 2 перебрати масив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];

//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('EVEN');
//     total += number;
//   }
// }

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('EVEN');
//     total += number;
//   }
// }

// for (const number of numbers) {
//   // console.log(number);
//   if (number % 2 !== 0) {
//     console.log(`Ітерацію з ${number} пропускаємо `);
//     continue;
//   }
//   total += number;
// }

// console.log(total);
