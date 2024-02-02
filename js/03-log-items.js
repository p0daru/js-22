/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

// RETURN тут не потрібно
const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);
