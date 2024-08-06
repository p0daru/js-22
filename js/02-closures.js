/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */
// const fnA = function (parametr) {
//     const innerVariable = 'Hello';

//     const innerFunction = function () {
//         console.log(parametr);
//         console.log(innerVariable);
//         console.log('Call of innerFunction');
//     };

//     return innerFunction;
// };

/**
 * у змінну fnB записується результат fnA,
 * а результатом є функція innerFunction
 * оскільки результат - функція, то і викликати треба функцію
 */
// const fnB = fnA(555);

// fnB();

// console.log(fnB); // тіло innerFunction
// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

/*
 * Поварёнок
 */
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} is cooking ${dish}`);
// };

// makeDish('Rodolfo', 'apple pie');
// makeDish('Rodolfo', 'hot potato');
// makeDish('Rodolfo', 'milkshake');

// makeDish('Oliver', 'lazanya');
// makeDish('Oliver', 'cake');
// makeDish('Oliver', 'pasta');

// const makeCheff = function (sheffName) {
//     const innerVar = 555;
//     const message = 'Hello';

//     // функція, яка повертається, отримує доступ до всіх локальних змінних і параметрів (ЩО ЮЗАЮТЬСЯ ВСЕРЕДИНІ ЦІЄЇ ФУНКЦІЇ)
//     const makeDish = function (dish) {
//         console.log(innerVar);
//         console.log(message);
//         console.log(`${sheffName} is cooking ${dish}`);
//     };

//     return makeDish;
// };

// const mango = makeCheff('Mango');
// console.dir(mango);

// mango('potato');
// mango('escargots');

// const poly = makeCheff('Poly');
// console.dir(poly);

// poly('pizza');
// poly('croissants');

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */
// const myLib = {
//     value: 0,
//     add(num) {
//         this.value += num;
//     },
//     getValue() {
//         return this.value;
//     },
// };

// myLib.add(5);

// console.log(myLib.value);

// console.log(myLib.getValue());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib); // це посилання, збирач сміття не працює

// myLib.add(10);
// console.log(myLib.getValue());

// myLib.add(500);
// console.log(myLib.getValue());

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     return {
//         raise(amount) {
//             if (amount > 1000) {
//                 return 'Ты офигел?';
//             }

//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зарпалата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager);
// console.log(salaryManager.current());

// salaryManager.raise(200);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(100000));

// console.log(salaryManager.current());
