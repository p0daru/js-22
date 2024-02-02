/*
 * ПСЕВДОМАСИВ ЕЛЕМЕНТІВ arguments и Array.from и ...
 */

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

// const add = function (...args) {
//   console.log(args);

//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (arrayOfNums, ...rest) {
//   console.log(arrayOfNums);
//   console.log(rest);

//   let sameNums = [];

//   for (const number of arrayOfNums) {
//     if (!rest.includes(number)) continue;
//     sameNums.push(number);
//   }

//   return sameNums;
// };

// const filterNumbers = function (array, ...args) {
//   console.log(`arr: `, array);
//   console.log(args);

//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} є скрізь!`);
//     }
//   }
//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

/*
 * Знайти слова з двох масивів з однаковою довжиною і записати їх в один масив
 */

///// VARIANT-1
// const filterWordslength = function (array, ...args) {
//   console.log(array);
//   console.log(args);

//   const uniqueLength = array[0].length;
//   const uniqueLengths = [];

//   for (const name of array) {
//     args.push(name);
//   }

//   for (const name of args) {
//     if (name.length === uniqueLength) {
//       uniqueLengths.push(name);
//     }
//   }

//   return uniqueLengths;
// };

// console.log(
//   filterWordslength(['Masha', 'Sasha', 'Olivia', 'Viktoria'], 'Katya', 'Dasha'),
// ); // [Masha, Sasha, Katya, Dasha]

///// VARIANT-2
const filterWordslength = function (array, ...args) {
  /*
   * flat(depth) - повертає новий масив,
   * у якому всі елементи вкладених підмасивів
   * були рекурсивно "підняті" на заданий рівень глибини.
   */

  const allNames = [array, ...args].flat(2); // 'Masha' в 'Katya', потім 'Nastya' в 'Masha'

  const filteredByLength = allNames.filter(
    name => name.length === array[0].length,
  );

  return filteredByLength;

  // const sameLengthNames = [];

  // for (const name of allNames) {
  //   if (name.length === allNames[0].length) {
  //     sameLengthNames.push(name);
  //   }
  // }

  // return sameLengthNames;
};

console.log(
  filterWordslength(
    ['Masha', 'Sasha', 'Olivia', 'Viktoria', ['Nastya', 'Diana']],
    'Katya',
    'Dasha',
  ),
); // [Masha, Sasha, Katya, Dasha]
