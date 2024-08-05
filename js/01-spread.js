/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// метод concat - робить склейку масивів
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// console.log(numbers); // копія масиву [1, 2, 3]. оригінальний масив [1, 2, 3] НІЯК НЕ ЗМІНИВСЯ!!

// spread
// const numbers = [
//   1000,
//   ...[1, 2, 3],
//   5000,
//   ...[4, 5, 6],
//   7000,
//   ...[7, 8, 9],
//   9000,
// ];

// // console.log(numbers);

// /*
//  * Поиск самой маленькой или большой температуры (числа)
//  */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 10));
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]); // посилання на ОДИН і ТОЙ САМИЙ об`єкт
// console.log(a === b); // при цьому масиви РІЗНІ

// a[0].x = 1000;

// console.log(a);
// console.log(b);

// const x = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const y = [...x];

// console.log(x);
// console.log(y);

// x[0].push(3);
// console.log(x);
// console.log(y);

// /*
//  * Сшиваем несколько массивов в один через concat() и spread
//  */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);
// console.log(lastWeekTemps);

// АБО
// const allTemps1 = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// console.log(allTemps1);
// console.log(lastWeekTemps);

/**
 * ПРАВИЛО: якщо елемент якогось із масивів - складний тип
 * При розпиленні масивів, що складаються зі складних типів, у новий масив
 * і зміні елементів цього нового масиву, змінюються і оригінальні масиви.
 * Бо при РОЗПИЛЕННІ складних типів буде ПОСИЛАННЯ, а НЕ КОПІЯ
 * При CONCAT() теж саме!!!!
 */
const lastWeekTemps = [[1], 2, 3]; // тут перший елемент - це масив, тобто складний тип
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps]; // розпиляємо
// console.log(allTemps);
// console.log(lastWeekTemps);

// allTemps.push(5);
// console.log(allTemps);
// console.log(lastWeekTemps); // тут змін ніяких, бо ми змінюємо масив allTemps, а не lastWeekTemps

// // ОДНАК!! Якщо ми змінимо перший елемент масиву allTemps, який є ПОСИЛАННЯМ на масив lastWeekTemps (при розпиленні масиву зі складних типів, буде посилання замість копії)
// allTemps[0].push(15);
// console.log(allTemps);
// console.log(lastWeekTemps); // спостерігаємо ЗМІНИ

// АБО
// const allTemps1 = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// console.log(allTemps1);
// console.log(lastWeekTemps); // залишається як був

// allTemps1[0].push(2);
// console.log(allTemps1);
// console.log(lastWeekTemps); // змінюється

// /*
//  * Распыление объектов
//  * - Object.prototype.assign() и spread
//  */
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b); // розпиляє зліва-направо і перезаписує старі значення ключів, які вже є

// console.log(c);

const c = {
  ...a,
  x: 15,
  ...b,
  y: 20,
};

console.log(c);

/// ПРИКЛАДИ
// const fav23 = { song1: 'Home', song2: 'JPEG RAW', x: 15 };
// const fav24 = { song1: 'Rock', song3: 'Mercy' };

// const allFavs = {
//   song1: 'Hello',
//   ...fav23,
//   song2: 'Hahha',
//   ...fav24,
// };

// console.log(allFavs);

// const monSchedule = { l1: 'Math', l2: 'History', l3: 'Chemistry' };
// const frSchedule = { l1: 'Physics', l5: 'Art', l6: 'Chemistry', l2: 'History' };

// const schedule = {
//   l1: 'Foreign literature',
//   ...monSchedule,
//   l2: 'English',
//   l4: 'Ukrainian',
//   ...frSchedule,
//   l7: 'German',
// };

// console.log(schedule);

// {
//   l1: 'Physics',
//   l2: 'History'
//   l3: 'Chemistry',
//   l4: 'Ukrainian',
//   l5: 'Art',
//   l6: 'Chemistry',
//   l7: 'German',
// }

// const europe = { country1: 'Belgium', country2: 'France', country3: 'Sweden' };
// const northAmerica = {
//   country1: 'USA',
//   country2: 'Mexico',
//   country4: 'Greenland',
// };

// const countries = {
//   ...europe,
//   country1: 'Ukraine',
//   country5: 'UK',
//   ...northAmerica,
//   country3: 'Australia',
//   country7: 'Norway',
// };

// console.log(countries);

// const res = {
//   country1: 'USA',
//   country2: 'Mexico',
//   country3: 'Australia',
//   country4: 'Greenland',
//   country5: 'UK',
//   country7: 'Norway',
// };

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);
