//// TASK-1

// const firstArray = ['Mango', 'Poly'];
// const secondArray = ['Ajax', 'Chelsea'];
// const maxLength = 12;

// // const secondArray = ['Ajax', 'Chelsea', 'Ababa', 'kfkf'];
// // console.log(secondArray.slice(0, 3));  // ['Ajax', 'Chelsea', 'Ababa']

// const newArray = firstArray.concat(secondArray);

// console.table(newArray);

// if (newArray.length > maxLength) {
//   console.log(newArray.slice(0, maxLength)); // ["Mango", "Poly", "Ajax"]
// } else {
//   console.log(newArray);
// }

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//   } else {
//     newArray;
//   }

//   return newArray;
//   // Change code above this line
// }

// АБО

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   } else {
//     return newArray;
//   }
//   // Change code above this line
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));

//// TASK-2
// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length <= longestWord.length) {
//       continue;
//     }
//     longestWord = word;
//   }

//   return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord('Google do a roll'));

//// TASK-3
// function filterArray(numbers, value) {
//   // Change code below this line
//   let filteredArray = [];
//   for (const number of numbers) {
//     if (number <= value) {
//       continue;
//     }
//     filteredArray.push(number);
//   }
//   return filteredArray;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]

//// TASK-4
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let arrayOfCommon = [];

//   for (const item of array1) {
//     if (!array2.includes(item)) continue;
//     arrayOfCommon.push(item);
//   }

//   return arrayOfCommon;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

//// TASK-5
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 !== 0) continue;
//     evenArray.push(i);
//   }
//   return evenArray;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5)); //[2, 4]

//// TASK-6
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//     number = i;
//     break;
//   }
// }

// console.log(number);

//// TASK-7
function includes(array, value) {
  // Change code below this line
  let result = false;
  for (const item of array) {
    if (item === value) result = true;
  }
  return result;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
