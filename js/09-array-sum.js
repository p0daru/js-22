/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

// for (const el1 of array1) {
//   total += el1;
// }
// for (const el2 of array2) {
//   total += el2;
// }

// ОПТИМАЛЬНІШЕ => CONCAT - зшить масиви!!!
// JOIN тут поверне рядок
// зроби новий масив і зший елементи array1, а потім елементи array2

const numbers = array1.concat(array2, [1, 2, 3], [90, 70]);

for (const number of numbers) {
  total += number;
}

console.log(total);
