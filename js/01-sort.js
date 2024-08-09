/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];
// numbers.sort(); // за замовчуванням сортує по зростанню, деструктивний
// console.log(numbers);

const letters = ['b', 'B', 'a', 'A'];
// letters.sort(); // сортує по юнікоду (код юнікоду), деструктивний метод
const res = [...letters].sort();
// console.log(res);
// console.log(letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

// numbers.sort((curEl, nextEl) => {
//     return curEl - nextEl;
// });

// console.log(numbers);

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */
// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log(descSortedNumbers);
// console.log(ascSortedNumbers);

// const descSortedNumbers1 = numbers.slice().sort((a, b) => b - a);
// const ascSortedNumbers1 = numbers.slice().sort((a, b) => a - b);
// console.log(descSortedNumbers1);
// console.log(ascSortedNumbers1);

/*
 * Кастомная сортировка сложных типов
 */
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени

const sortedByBestPlayers = [...players].sort(
    (curPlayer, nextPlayer) => nextPlayer.timePlayed - curPlayer.timePlayed,
);
// console.log(sortedByBestPlayers);

const sortedByWorstPlayers = players
    .slice()
    .sort(
        (curPlayer, nextPlayer) => curPlayer.timePlayed - nextPlayer.timePlayed,
    );
// console.log(sortedByWorstPlayers);

const sortedByName = players.slice().sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
});
// console.log(sortedByName);

/////// VALUES AND REFS
//// приклад 1. values
// let a = 1;
// let b = 1;
// let c = a;

// console.log(a === b);
// console.log(a === c);

// c += 1;
// console.log(c); // змінюємо "с"
// console.log(a); // "а" залишається такою ж, як і була. оскільки ми НЕ ПОСИЛАЄМОСЬ на "а", а просто копіюємо значення "а" в "с"

//// приклад 2. references
// let x = { age: 11 }; // адреса - 0x01
// let y = { age: 11 }; // адреса - 0x02

// console.log('x === y', x === y); // різні посилання, різні адреси

// x = { age: 17 }; // зовсім інша адреса для х, адреса - 0x03
// console.log('x', x);

// y = x; // перевизначаємо y, адреса - 0x03 (така ж, як і в х)

// console.log('x === y', x === y); // однакові адреса, однакові посилання = рівні

//// приклад 3. references
// const зберігає адресу, саме тому масив (який лежить у даній адресі) можна ЗМІНЮВАТИ!!!!
// однак записати новий масив в array1 не можна, бо у нього буде ІНШЕ ПОСИЛАННЯ ТА ІНША АДРЕСА
// const array1 = [1, 7, 8, 9];
// array1.push(8, 10, 15, 17);

// console.log('array1', array1);

//// приклад 4. references
// const зберігає адресу, саме тому масив (який лежить у даній адресі) можна ЗМІНЮВАТИ!!!!
// однак записати новий масив в array1 не можна, бо у нього буде ІНШЕ ПОСИЛАННЯ ТА ІНША АДРЕСА
// let arr1 = [1, 7, 8, 9]; // адреса - 0x01
// const arr2 = arr1; // адреса - 0x01

// console.log('arr1 === arr2', arr1 === arr2); // адреса - 0x01

// arr2.push(4); // адреса - 0x01;
// console.log(arr1);

// arr1 = [10, 2, 3]; // адреса - 0x02
// console.log('arr1', arr1); // адреса - 0x02
// console.log('arr2', arr2); // адреса - 0x01 !!!!!

///// arr2 посилається на АДРЕСУ, яка лежить в arr1. НЕ НА МАСИВ, ЯКИЙ ТАМ!
/// якщо в arr1 записано інший масив, то там вже інша адреса. і arr2 БІЛЬШЕ НЕ ПОСИЛАЄТЬСЯ на arr1
