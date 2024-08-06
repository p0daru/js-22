/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };

// const addArrow = (a, b, c) => {
//     return a + b + c;
// };

// const addArrow1 = (a, b, c) => ({
//     a,
//     b,
//     c,
// });

// console.log(add(1, 2, 3));
// console.log(addArrow(1, 2, 3));
// console.log(addArrow1(1, 2, 3));

// const fnA = function () {
//     return {
//         a: 5,
//     };
// };

// const fnA1 = () => ({ a: 5 });

// console.log(fnA1());

/// example 3
// const filter1 = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// const callback1 = value => value >= 3;

// const r1 = filter1([1, 2, 3, 4, 5], callback1);
// const r11 = filter1([1, 2, 3, 4, 5], value => value >= 3);

// console.log(r1);
// console.log(r11);

// const callback2 = value => value <= 4;

// const r2 = filter1([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// const r22 = filter1([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);

// console.log(r2);
// console.log(r22);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// // к-сть більше ніж 120
// const getFruitsWithQuantity1 = fruit => fruit.quantity >= 120;

// const r3 = filter1(fruits, getFruitsWithQuantity1);
// console.log(r3);
