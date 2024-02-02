/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);

// console.log(index); // -1 для того, чого не існує

// console.log(cards.splice(index, 1)); // це масив видаленних елементів

// console.log(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;

// // cards.splice(4, 0, 5, 10, 20); // 1 індекс - нічого не видаляю, а ставлю 5, далі 10 і 20 (подвинув)

// // console.table(cards);

// cards.splice(index, 0, cardToInsert); // 1 індекс - нічого не видаляю, а ставлю 5, далі 10 і 20 (подвинув)

// console.table(cards);

/*
 * Обновление (по индексу)
 */
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// cards.splice(index, 1, 555); // індекс 1 - видаляю, і ставлю 555

// console.table(cards);

/*
 * push() - ДОДАЄ БЕЗКІНЕЧНО ВКІНЕЦЬ shift(), unshift()
 */
// const card = 'Карточка-6';

// cards.push(card, 'Карточка-7', 'Карточка-n'); // повертає довжину масиву

// console.table(cards);

/*
 * pop() - ВИДАЛЯЄ ТІЛЬКИ ОСТАННІЙ ВКІНЦІ, повертає видалений елемент або undefined, коли масив порожній
 */
// console.log(cards.pop()); // видаляє 'Карточка-5', бо він останній

// console.table(cards);

/*
 * slice(від, до не включно) - новий масив, зо містить копію частини вихідного масиву
 */
// console.log(cards.slice(0, 3)); // вирізав частину і зробив копію

// console.log(cards.slice()); // повна копія масиву

// console.log(cards.slice(2)); // від 0 і до кінця масиву

// console.log(cards.slice(-2)); // останні 2 елементи (якщо без кінця масиву)

// console.log(cards); // не змінився

/*
 * shift() - ЗДВИГ (ВИДАЛЯЄ) НА 1 ЕЛЕМЕНТ НА ПОЧАТКУ (ВИДАЛЯЄ НУЛЬОВИЙ ЕЛЕМЕНТ)
 */
// cards.shift();
// console.table(cards);

/*
 * unshift() - ДОДАЄ БЕЗКІНЕЧНО ВКІНЕЦЬ
 */
// const card = 'New Card';

// cards.unshift(card);

// console.table(cards);

//// TO REMEMBER
// JOIN:
/* // З`єднує всі елементи МАСИВА в один рядок

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join('-')); */

// SPLIT:
/* // Розбиває РЯДОК на масив

const string = 'Hahah hha hha';

console.log(string.split(' '));
 */
