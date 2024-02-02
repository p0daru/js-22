/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// SPLIT - розбиває по чомусь ('' - букві, ' ' - слову) в МАСИВ
// JOIN - зшиває по чомусь (знаку, комі, тире)

const words = normalizedTitle.split(' '); // РОЗБИТИ
// console.log(words);

const slug = words.join('-'); // ЗШИТИ
// console.log(slug);

// CHAINING - ланцюг;
// join('-') викликається не на title,
// а на title.toLowerCase().split(' ')
const slug1 = title.toLowerCase().split(' ').join('-'); // абстракція

console.log(slug1);
