/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'aLkmmckKKDMmdmd';
const letters = string.split(''); // розбиває рядок в масив
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  // if (letter === letter.toLowerCase()) {
  //   invertedString += letter.toUpperCase();
  // } else {
  //   invertedString += letter.toLowerCase();
  // }

  //  invertedString =
  //    letter === letter.toLowerCase()
  //      ? invertedString + letter.toUpperCase()
  //      : invertedString + letter.toLowerCase();

  const isEqual = letter === letter.toLowerCase();

  invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log(invertedString);
