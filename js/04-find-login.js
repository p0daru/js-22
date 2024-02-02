/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

/*
 * рішення без функції
 */
// const loginToFind = 'k1widab3st';
// const message = logins.includes(loginToFind)
//   ? `${loginToFind} is found`
//   : `${loginToFind} is not found`;

// console.log(message);

/*
 * тернарник
 */
// const findLogin = function (allLogins, loginToFind) {
//   // ВСЕ, ЩО ФУНКЦІЯ ВИКОРИСТОВУЄ, ВОНА ОТРИМУЄ В ПАРАМЕТРАХ
//   // АБО ВСЕРЕДИНІ ФУНКЦ

//   // тут повертає результат
//   return allLogins.includes(loginToFind)
//     ? `${loginToFind} is found`
//     : `${loginToFind} is not found`;
// };

/*
 * через forof та ===
 * відразу два return
 */
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       // перериває ФУНКЦІЮ на першому знайденому
//       return `${loginToFind} is found`;
//     }
//   }

//   return `${loginToFind} is not found`;
// };

/*
 * попередній розв`язок від оберненого
 */
// const findLogin = function (allLogins, loginToFind) {  // exmpl: loginToFind === 'avocod3r'
//   for (const login of allLogins) {
//     /* Від оберненого */
//     if (login !== loginToFind) {
//       continue; // перехід до наступної ітерації в ЦИКЛІ
//     }

//     return `${loginToFind} is found`; // якщо дорівнює, то ВИХІД З ФУНКЦІЇ
//   }

//   return `${loginToFind} is not found`;
// };

// console.log(findLogin(logins, 'avocod3r')); // логую, бо потрібен return
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));
