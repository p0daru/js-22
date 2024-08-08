/*
 * Array.prototype.map()
 * - Поэлементно перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map(number => number * 2);

// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
console.table(players);

/*
 * Получаем массив имён всех игроков
 */
// [undefined, undefined, undefined] -> масив такої ж довжини, як і оригінальний, але це копія
const playerNames = players.map(player => player.name);
// console.log(playerNames); // повертає масив, не змінюючи оригінального об`єкта

const playerTime = players.map(player => player.timePlayed);
// console.log(playerTime);

const res = players.map(({ id, name }) => ({ id, name }));
// console.log('res', res);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */
const updatedPoints = players.map(player => {
  return {
    ...player,
    points: player.points + 10,
  };
});

// console.table(updatedPoints);

/*
 * Увеличиваем кол-во часов игрока по id
 */
const playerIdToUpdated = 'player-3';

// const updatedPlayers = players.map(player => {
//   if (player.id === playerIdToUpdated) {
//     return {
//       ...player,
//       timePlayed: (player.timePlayed += 100),
//     };
//   }

//   return player;
// });

// console.table(updatedPlayers);

// const updatedPlayers = players.map(player =>
//   player.id === playerIdToUpdated
//     ? { ...player, timePlayed: (player.timePlayed += 100) }
//     : player,
// );

// console.table(updatedPlayers);
