/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'k1widab3st';
// let message = `Пользователь ${loginToFind} не найден`; // від початку юзера не знайдено

/*
 * ЧЕРЕЗ FOR
 */

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log(`Login ${login}`);
//   console.log(`Login === loginToFind`, login === loginToFind);

//   // Варіант А
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break; // закінчує цикл
//   }

//   // Варіант Б
//   // if (login !== loginToFind) {
//   //   continue; // наступна ітерація
//   // }
//   // message = `Пользователь ${loginToFind} найден`;

//   // ПЕРЕВІРЯЄ ДО ОСТАННЬОГО ЕЛЕМЕНТУ,
//   // І ВИВОДИТЬ ТЕ, ЩО БУДЕ ДЛЯ ОСТАННЬОГО ЕЛ

//   // if (login !== loginToFind) {
//   //   message = `Пользователь ${loginToFind} не найден`;
//   // } else {
//   //   message = `Пользователь ${loginToFind} найден`;
//   // }

//   // І ТУТ ТЕЖ

//   // message =
//   //   logins[i] === loginToFind
//   //     ? `Пользователь ${loginToFind} найден`
//   //     : `Пользователь ${loginToFind} не найден`;
// }

// console.log(message);

/*
 * ЧЕРЕЗ FOR OF
 */

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break; // закінчує цикл
//   }
// }
// console.log(message);

/*
 * ЧЕРЕЗ INCLUDES
 */

// перебирає в циклі і порівнює qwe з елементами - ЦИКЛ
// console.log(logins.includes(loginToFind));

// // декларативний код
// const message = logins.includes(loginToFind) // абстракція - метод приховує деталі під капотом і показує тільки те, що потрібно
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;

// console.log(message);
