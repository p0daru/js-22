/*
 * Цикл for
 */

// for (иніціалізація; умова; пост - вираз){
//  до поки умова не дорівнює false
//   тіло цикла
// }

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// 0 - 100; крок 1
// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }

// 50 - 100; крок 5
// for (let i = 50; i <= 100; i += 5) {
//   console.log(i);
// }

// 100 - 0; крок 1
// for (let count = 100; count >= 0; count -= 1) {
//   console.log(count);
// }

// 50 - 0; крок 5
// for (let count = 50; count >= 0; count -= 5) {
//   console.log(count);
// }

/*
 * Pre-increment и Post-increment
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = a++;
// console.log(b); // 10, бо постінкремент!!
// console.log(a); // 11, спочатку присвоювання б, потім +1 для а

// let a = 10;
// const b = ++a;
// console.log(b); // 11, бо преінкремент!!
// console.log(a); // 11, спочатку +1 для а, потім присвоювання б

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`ЗП працівника номер ${i} - ${salary}`);

//   totalSalary += salary;
// }

// console.log(`Total salary: ${totalSalary}`);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// const min = 0;
// const max = 2;
// let total = 0;

// for
//

// for (let i = min; i <= max; i += 1) {
//   // ск разів влізає 2 в і (три, якщо i = 6)
//   if (i % 2 === 0) {
//     console.log(i);
//     total += i;
//   }
// }

// console.log(`Сума всіх парних чисел => ${total}`);

// for (let i = min; i <= max; i += 1) {
//   // ск разів влізає 2 в і (три, якщо i = 6)
//   // !== - строга нерівність
//   if (i % 2 !== 0) {
//     console.log(`НЕ парне ${i}`);
//     continue; // пропускай, йди на НАСТУПНУ ІТЕРАЦІЮ
//   } // якщо цей код виконався і число не парне, тоді наступний код НЕ ВИКОНУЄТЬСЯ

//   // якщо парне, то код далі ВИКОНУЄТЬСЯ
//   console.log(i);
//   total += i;
// }

// console.log(`Сума всіх парних чисел => ${total}`);

// for (let i = min; i <= max; i += 1) {
//   // якщо тру, if вик і код далі
//   if (i % 2 !== 0) {
//     console.log(`НЕ парне ${i}`);
//   }
//   console.log(i);
//   // сума = непарне 1 + парне 2 => 3
//   total += i;
// }

// console.log(`Сума всіх парних чисел => ${total}`);

// for (let i = min; i <= max; i += 1) {
//   // без continue - погана практика, все в дужках
//   if (i % 2 !== 0) {
//     console.log(`НЕ парне ${i}`);
//   } else {
//     console.log(i);
//     total += i;
//   }
// }

// console.log(`Сума всіх парних чисел => ${total}`);
