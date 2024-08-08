const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  {
    id: 'player-5',
    name: 'Chelsy',
    timePlayed: 280,
    points: 48,
    online: false,
  },
];

/*
 * Array.prototype.every() - ВСІ задовольняють -> true
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */
// звичайна ф-ція
const allOnline = function (players) {
  for (const { online } of players) {
    if (!online) {
      return false;
    }
  }

  return true;
};
// console.log(allOnline(players));

// стрілка
const allOnline1 = players => {
  for (const { online } of players) {
    if (!online) {
      return false;
    }
  }

  return true;
};
// console.log(allOnline1(players));

// every - якщо кожен елемент масиву true, тоді повертає true
const isAllOnline = players.every(player => player.online); // якщо хоча б один false - повертає false
// console.log('isAllOnline: ', isAllOnline);

// every + деструктуризація
const isAllOnline1 = players.every(({ online }) => online); // ({})
// console.log('isAllOnline: ', isAllOnline1);

const isAllBiggerThan100 = players.every(player => player.timePlayed > 100);
// console.log('isAllBiggerThan100', isAllBiggerThan100);

/*
 * Array.prototype.some() - ХОЧА Б ОДИН задовольняє умову
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */
const isAnyOnline = players.some(player => player.online); // хоча б хтось онлайн
// const isAnyOnline = players.some(({ online }) => online); // коротший запис
// console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayer = players.some(player => player.timePlayed > 400);
// const anyHardcorePlayer1 = players.some(({ timePlayed }) => timePlayed > 400); // коротший запис
// console.log('anyHardcorePlayer: ', anyHardcorePlayer);

/// всі або хтось вдома?
const family = [
  { name: 'mom', atHome: true, currentLocation: 'work' },
  { name: 'dad', atHome: false, currentLocation: 'work' },
  { name: 'sister', atHome: true, currentLocation: 'home' },
  { name: 'me', atHome: false, currentLocation: 'university' },
];

/// всі вдома?
const isEveryoneAtHome = family.every(famMember => {
  console.log(famMember);

  return famMember.currentLocation === 'home';
});
// console.log('isEveryoneAtHome: ', isEveryoneAtHome);

const isEveryoneAtHome1 = family.every(({ atHome }) => atHome);
// console.log('isEveryoneAtHome1: ', isEveryoneAtHome1);

/// хтось вдома?
const anybodyHome = family.some(famMember => {
  console.log(famMember);

  return famMember.atHome;
});
// console.log('anybodyHome: ', anybodyHome);

const anybodyHome1 = family.some(({ atHome }) => atHome);
// console.log('anybodyHome1: ', anybodyHome1);
