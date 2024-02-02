/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

// оголошення функції
// функціональний вираз, де x + y - параметри

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('Function add');

//   return x + y; // повертає одне значення (масив, число, інша функцію)
// };

// // add(); // виклик без аргументів - undefined

// const r1 = add(2, 3); // 2, 3 - аргументи, присвоюються у параметри
// console.log(`r1: ${r1}`);

// const r2 = add(10, 15);
// console.log(`r2: ${r2}`);

// const r3 = add(30, 50);
// console.log(`r3: ${r3}`);

// const fn = function (value) {
//   console.log(1);

//   console.log(2);

//   // for (const iterator of object) {
//   //   if () {
//   //     for (const iterator of object) {
//   //       if () {
//   //           return 555; // ВКЛАДЕНІСТЬ НЕ ВАЖЛИВА, RETURN ПОВНІСТЮ ЗАКІНЧУЄ ВИКОНАННЯ ФУНКЦ
//   //       }
//   //     }
//   //   }
//   // }

//   if (value < 50) {
//     return 'value < 50'; // подібне до break, але не цикл закінчує, а повністю виконання функції
//   }

//   return 'value > 50';

//   // АБО
//   // return value < 50 ? 'value < 50' : 'value > 50';
// };

// console.log(fn(100));
// console.log(fn(10));

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */

const fnA = function () {
  console.log('Выполняется функция A');

  fnB();
};

const fnB = function () {
  console.log('Выполняется функция B');

  fnC();
};

const fnC = function () {
  console.log('Выполняется функция C');

  console.log(value);
};

// // console.log('Лог перед вызовом функции A');

fnA();

// // console.log('Лог после вызова функции A');

// // console.log('Лог перед вызовом функции B');
fnB();
// // console.log('Лог после вызова функции B');

// // console.log('Лог перед вызовом функции C');
fnC();
// // console.log('Лог после вызова функции C');
