/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

// якщо це примітив, то при деструктуризації, створюється КОПІЯ
// якщо складний тип, то – ПОСИЛАННЯ
// const {
//   rating = 1, // дефолтне значення
//   tracks = [],
//   name,
//   trackCount: numberOfTracks = 0, // зліва - ім`я властивості, справа - ім`я локальної змінної
//   author = 'user',
// } = playlist;
// console.log(rating); // 5 (щоб спрацював код, треба LET)

// playlist.rating = 7;
// console.log(playlist); // 7;
// console.log(rating); // 5

// rating = 10;
// console.log(rating); // 10
// console.log(playlist); // playlist.rating = 7, тобто ЗМІН НЕМАЄ, бо ЦЕ КОПІЯ

// tracks.push('трек-4');
// console.log(tracks);
// console.log(playlist.tracks); // змінився

/// властивості немає в об`єкті => undefined або default-значення
// 99% властивостей БЕЗ ДЕФОЛТНИХ ЗНАЧЕНЬ
// console.log(author);

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//     a: {
//       b: 1,
//       c: 1,
//       d: 1,
//     },
//   },
// };

// const { name, tag, location, avatar, stats } = profile;

// const { followers, views, likes } = stats;

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: {
//     followers: myFollowers = 5,
//     views,
//     likes,
//     a: { b, c, d }, // деструктуризуй стати
//   },
// } = profile;

// console.log(name, tag, location, avatar, myFollowers, views, likes, b, c, d);

//// Можна окремо деструктуризувати
// const { name } = profile;
// const { tag } = profile;

// console.log(name, tag);

// const { name: name1 } = profile;
// const { name: name2 } = profile;

// console.log(name1, name2);

/*
 * Деструктуризация массивов
 */

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb; // в якому порядку об`явили змінні, в такому і записались в них значення зліва-направо
// console.log(red, green, blue);

// // якщо треба пропустити властивість
// const [red1, , blue1] = rgb;
// console.log(red1, blue1);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));

//// ENTRIES
// const entries = Object.entries(authors);
// console.log(entries);

// for (const [name, rating] of entries) {
//   // lv1
//   // const name = entry[0];
//   // const rating = entry[1];

//   // lv2
//   // const [name, rating] = entry;

//   console.log(name, rating);
// }

/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;

//   console.log(name, tag, location, avatar, followers, views, likes);
// };

// const showProfileInfo = function ({
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// }) {
//   console.log(name, tag, location, avatar, followers, views, likes);
// };

// const showProfileInfo = function ({ name, tag, location, ...restProps }) {
//   console.log(name, tag, location, restProps);
// };

// showProfileInfo(profile);
