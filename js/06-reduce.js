/*
 * Array.prototype.reduce(callback(acc, number), початкове значення акумулятора) - ШВЕЙЦАРСЬКИЙ НІЖ роботи з колекцією ;)
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 * - бере багато і робить з цього багато щось одне
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => {
  // console.log('acc ', acc); // початкове значення acc - початкове значення масиву (або другий параметр методу reduce), а далі значення return
  // console.log('number', number);

  return acc + number; // значення acc
}, 0); // другий параметр - початкове значення acc
// console.log(total);

const total1 = numbers.reduce((acc, number) => acc + number, 0); // другий параметр - початкове значення acc
// console.log(total1);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary1 = function (salary) {
  /**
   * forEach - перебирає поелементно масив і НІЧОГО не повертає!!
   * map - перебирає поелементно масив і ПОВЕРТАЄ масив такої ж довжини з undefined
   * filter - перебирає поелементно масив і ПОВЕРТАЄ новий масив з елементами, які задовольняють умову в return
   * find - перебирає поелементно масив і ПОВЕРТАЄ перший елемент, який задовольняє умову, або undefined
   *
   * every - перебирає поелементно масив і ПОВЕРТАЄ TRUE, якщо всі елементи масиву задовольняють умову, інакше FALSE
   * some - перебирає поелементно масив і ПОВЕРТАЄ TRUE, якщо ХОЧА Б ОДИН елемент масиву задовольняє умову
   */

  /// отже, нам підходить forEach

  let total = 0;

  Object.values(salary).forEach(sal => (total += sal));

  return total;
};

// console.log(totalSalary1(salary));

const values = Object.values(salary);
const totalSalary = values.reduce((total, value) => total + value, 0);

// або
// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );

// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// const totalTimePlayed = players.reduce((totalTime, player) => {
//   console.log('totalTime: ', totalTime);
//   console.log('timePlayed: ', player.timePlayed);
//   console.log(
//     `totalTime + timePlayed = ${totalTime} + ${player.timePlayed} `,
//     totalTime + player.timePlayed,
//   );

//   return totalTime + player.timePlayed;
// }, 0);

// console.log('totalTimePlayed: ', totalTimePlayed);

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );

// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0,
);

// console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const allTags = tweets.reduce((acc, tweet) => {
//   // acc.push(...tweet.tags); // поганий код, бо ми змінюємо оригінальний tags

/**
 * створюмо новий масив в return
 * розпиляємо туди масив acc = [] і масив tweet = ['js', 'nodejs']
 * [...acc, ...tweet] = [...[], ...['js', 'nodejs']] = ['js', 'nodejs'] = acc
 *
 * те, що ми повертаємо, це новий акумулятор!!
 */
//   return [...acc, ...tweet];
// }, []);

const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// console.log(tagsStats);

// const tagsStats = allTags.reduce((acc, tag) => {
//   /// варіант 1
//   // if (acc[tag]) {
//   //   return {
//   //     ...acc,
//   //     [tag]: acc[tag] + 1,
//   //   };
//   // }

//   // return {
//   //   ...acc,
//   //   [tag]: 1,
//   // };

//   /// варіант 2
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

/// варіант 3
const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {},
);

console.log(tagsStats);

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1
