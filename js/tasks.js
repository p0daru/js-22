/* 
 ////// TASK-1 ///////
 Create a function which answers the question "Are you playing banjo?".
 If your name starts with the letter "R" or lower case "r", you are playing banjo!

 The function takes a name as its only argument, and returns one of the following strings:

 name + " plays banjo" 
 name + " does not play banjo"
 */

const areYouPlayingBanjo = function (name) {
  /*
    // CASE-1
    // const nameLetters = name.split('');
    // const firstLetter = nameLetters[0];

    // const firstLetter = name[0]; // the same as name.charAt(0);

    // return firstLetter.toLowerCase() === 'r'
    //   ? name + ' plays banjo'
    //   : name + ' does not play banjo';
*/
  // CASE-2
  return (
    name +
    (name[0].toLowerCase() === 'r' ? ` plays` : ` does not play `) +
    ' banjo'
  );
};

// console.log(areYouPlayingBanjo('Oleg'));
// console.log(areYouPlayingBanjo('Roma'));
// console.log(areYouPlayingBanjo('Margo'));
// console.log(areYouPlayingBanjo('Rosa'));

/*
 * ////// TASK-2 ///////
 * replaceAll(what should be replaced, replace to what)
 */
const replaceAll = function (string) {
  console.log(string.replaceAll('dog', 'monkey'));

  console.log(string.replaceAll("I think Ruth's", 'We love'));

  console.log(string);
};

// console.log(replaceAll("I think Ruth's dog is cuter than your dog!"));
// // Expected output: "I think Ruth's monkey is cuter than your monkey!"

/* 
 ////// TASK-3 ///////
 Given a string of digits, 
 you should replace any digit below 5 with '0' 
 and any digit 5 and above with '1'. 
 Return the resulting string.
 */

const fakeBin = function (numbers) {
  numbers = numbers.split('');
  let bins = [];

  for (const number of numbers) {
    if (number < 5) {
      bins.push(number.replaceAll(number, '0'));

      continue;
    }

    bins.push(number.replaceAll(number, '1'));
  }

  return bins.join('');
};

// console.log(fakeBin('45385593107843568')); // '01011110001100111'

/* 
 ////// TASK-4 ///////
 There was a test in your class and you passed it. Congratulations!
 But you're an ambitious person. You want to know if you're better than the average student in your class.

 You receive an array with your peers' test scores. Now calculate the average and compare your score!

 Return True if you're better, else False!
 */

function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  let average = 0;

  for (const classPoint of classPoints) {
    total += classPoint;
  }

  average = total / classPoints.length;

  return yourPoints > average; // поверне true або false
}

// console.log(betterThanAverage([2, 3], 5));

/*
 * ////// TASK-5 ///////
 * Write function RemoveExclamationMarks
 * which removes all exclamation marks from a given string.
 */
function removeExclamationMarks(string) {
  return string.replaceAll('!', '');

  //   return s.split('!').join('');
}

// console.log(removeExclamationMarks('!Hell!o World!'));

/*
 ////// TASK-6 ///////
 Write a function to convert a name into initials.
 This kata strictly takes two words with one space in between them.

 The output should be two capital letters with a dot separating them.

 It should look like this:
 Sam Harris => S.H
 patrick feeney => P.F
 */

const abbrevName = function (name) {
  // const nameSurname = name.split(' ');
  // let initials = [];
  // for (let i = 0; i < nameSurname.length; i += 1) {
  //   initials.push(nameSurname[i].slice(0, 1).toUpperCase());
  // }
  // return initials.join('.');

  const nameSurname = name.split(' ');
  const firstName = nameSurname[0].slice(0, 1);
  const lastName = nameSurname[1].slice(0, 1);

  return `${firstName}.${lastName}`.toUpperCase();
};

// console.log(abbrevName('Sam Harris'));
// console.log(abbrevName('patrick feeney'));
// console.log(abbrevName('P Savuzzi'));

/*
 * ////// TASK-7 ///////
 * In DNA strings, symbols "A" and "T"
 * are complements of each other, as "C" and "G".
 * Your function receives one side of the DNA (string,
 * except for Haskell); you need to return the other
 * complementary side.
 */
const dnaStrand = function (dna) {
  dna = dna.split('');

  for (let i = 0; i < dna.length; i += 1) {
    switch (dna[i]) {
      case 'A':
        dna[i] = 'T';
        break;

      case 'T':
        dna[i] = 'A';
        break;

      case 'C':
        dna[i] = 'G';
        break;

      case 'G':
        dna[i] = 'C';
        break;
    }
  }

  return dna.join('');
};

// console.log(dnaStrand('AAAA')); // 'TTTT', 'String AAAA is'
// console.log(dnaStrand('ATTGC')); // 'TAACG', 'String ATTGC is'
// console.log(dnaStrand('GTAT')); // 'CATA', 'String GTAT is'

/*
 *  ////// TASK-8 ///////
 * Given a random non-negative number,
 * you have to return the digits of this
 * number within an array in reverse order.
 */
function digitize(stringOfNums) {
  stringOfNums = stringOfNums.toString().split('');
  let arrayofNums = [];

  for (let i = stringOfNums.length - 1; i >= 0; i -= 1) {
    arrayofNums.push(Number(stringOfNums[i]));
  }

  return arrayofNums;
}

// console.log(digitize(35231)); // [1,3,2,5,3]
// console.log(digitize(0)); // [0]

/*
 * ////// TASK-9 ///////
 * Your task is to make a function that can take
 * any non-negative integer as an argument and return it
 * with its digits in descending order.
 * Essentially, rearrange the digits to create the highest
 * possible number.
 */
function descendingOrder(number) {
  let arrayOfNums = number.toString().split('');

  return arrayOfNums.sort().reverse().join('');
}

// console.log(descendingOrder(123456789)); //987654321

///// TASK-10 //////
const rps = function (player1, player2) {
  if (player1 === player2) return 'Draw!';

  if (
    (player1 === 'rock' && player2 === 'scissors') ||
    (player1 === 'scissors' && player2 === 'paper') ||
    (player1 === 'paper' && player2 === 'rock')
  ) {
    return `Player 1 won!`;
  }

  return `Player 2 won!`;
};

// console.log(rps('rock', 'scissors')); // 1
// console.log(rps('scissors', 'paper')); // 1
// console.log(rps('paper', 'rock')); // 1
// console.log(rps('rock', 'rock')); // 'Draw!'

//// TASK-11. The shortest word /////
const findShort = function (string) {
  const words = string.split(' ');
  let shortestWordLength = words[0].length;

  for (const word of words) {
    if (word.length >= shortestWordLength) continue;

    shortestWordLength = word.length;
  }

  return shortestWordLength;
};

// console.log(findShort('bitcoin take over the world maybe who knows perhaps')); // 3
// console.log(
//   findShort(
//     'turns out random test cases are easier than writing out basic ones',
//   ),
// ); // 3
// console.log(findShort("Let's travel abroad shall we")); // 2

/*
  //// TASK-12 /////
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
 */

const accum = function (string) {
  let letters = string.split('');
  let newString = [];

  for (let i = 0; i < letters.length; i += 1) {
    newString.push(
      letters[i].toUpperCase() + letters[i].repeat(i).toLowerCase(),
    );
  }

  return newString.join('-');
};

// console.log(accum('ZpglnRxqenU')); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// console.log(accum('NyffsGeyylB'));
