/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];  // завжди const

// console.table(friends);

// console.log(friends[2]); // Poly
// console.log(['Mango', 'Lemon', 'Kiwi', 'Poly'][2]); // Poly
// console.log(friends[4]); // undefined

// const lastIndex = friends.length - 1; // індекс = довжина - 1
// console.log(lastIndex);

// friends[1] = 'перезапис значення';
// friends[3] = 857585;

// console.table(friends);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// let a = 10;
// let b = a; // робиться копія, дві окремі клітинки

// console.log(a);
// console.log(b);

// const a = [1, 2, 3]; // клітинка для масива і для а
// const b = a; // передача по посиланню

// console.log(a);
// console.log(b);

// a[0] = 500;

// console.log(a);
// console.log(b);

// console.log(a === b); // один і той самий масив!

// console.log([1, 2, 3] === [1, 2, 3]); // порівняння відбувається по адресу в пам`яті, а не по значенню (це дві різні адреси)

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// // console.table(friends);
// // const lastIndex = friends.length - 1;

// // for (let i = 0; i <= lastIndex; i += 1) {
// //   friends[i] += '-1';
// // }

// for (const friend of friends) {
//   // friend - локальна змінна, яку видно тільки у даному циклі
//   // тобто якщо написать friend += '-1'; - нічого не зміниться!
//   //  (навіть через let, без const)
//   console.log(friend);
// }

// console.table(friends);
