/**
 * Об`єкти (словники)
 * Складається з властивостей
 * Ключ (ім`я властивості, завжди рядок) - значення (будь-який тип)
 * Описують і групують характеристики однієї сутності (юзера, книги, продуктів в магазині)
 *
 */

// let myFamily = {
//   dad: 'Serhio',
//   $mom: 'Ira',
//   _sister: 'Nana',
//   me: 'Dari',
// };

// /**
//  * Вкладені обєкти
//  *
//  */
// let myFamily2 = {
//   dad: {
//     name: 'Serhiy',
//     age: 57,
//     occupation: 'electrician',
//     hobbies: ['reading', 'watching films', 'story telling'],
//   },
//   $mom: 'Ira',
//   _sister: 'Nana',
//   me: 'Dari',
// };

// myFamily2.dad.hobbies.push('diving');
// console.log(myFamily2.dad.hobbies);

// let mom = '$mom';
// myFamily2[mom] = 'Iryna';
// console.log(myFamily2[mom]);

// myFamily2.aunt = 'Sveta';
// console.log(myFamily2);
// console.log(myFamily2.aunt);

// // Методи об'єкта​
// const bookShelf = {
//   books: ['Mocking Bird', 'Babii Yar'],
//   // method of this object
//   getBooks() {
//     return this.books;
//   },
//   addBook(nameOfTheBook) {
//     this.books.push(nameOfTheBook);
//   },
//   removeBook(nameOfTheBook) {
//     const bookIndex = this.books.indexOf(nameOfTheBook);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks());

// bookShelf.addBook('Bible');
// console.log(bookShelf.getBooks());

// bookShelf.removeBook('Mocking Bird');
// console.log(bookShelf.getBooks());

//// SPREAD
// створення нового масиву (записуються всі значення з обох масивів)
// const playlist22 = ['JPEG RAW', 'Tell All My Friends', 'The Wild Inside'];
// const playlist23 = ['JPEG RAW', 'Caustic Love', 'Fire Within'];
// const playlist24 = [...playlist22, ...playlist23];
// console.log(playlist24); // 'JPEG RAW' повториться!

// // створення нового об`єкта (перезапис значень з однаковим ключем. перезапис !існуючого! значення)
// const pl22 = {
//   song1: 'JPEG RAW',
//   song2: 'Tell All My Friends',
//   song3: 'The Wild Inside',
// };
// const pl23 = {
//   song1: 'Hehehe',
//   song2: 'Caustic Love',
// };
// const pl24 = { ...pl22, ...pl23 };
// const pl25 = { song1: 'Blank Space', ...pl22, ...pl23, song2: 'Good Day' };
// console.log(pl25);

/// REST - довільна к-сть аргументів (пишеться зліва від операції присвоєння)
function exmpl(...args) {
  console.log(args); // масив аргументів

  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
}

console.log(exmpl(5, 10));
console.log(exmpl(5, 10, 70));
console.log(exmpl(5, 10, 70, 1200));

/**
 * ДЕСТРУКТУРИЗАЦІЯ - розпаковка значень властивостей об`єкта в локальні змінні
 */
const user = {
  name: 'Danik',
  tag: 'danya3000',
  stats: {
    followers: 500,
    likes: {
      photoLikes: 1080,
      videoLikes: 500,
    },
    views: 7800,
  },
};

const {
  name: userName,
  surname: userSurname = 'Ocheretenko',
  tag: userTag,
  stats: {
    followers: userFollowers = 0,
    views: userViews = 0,
    likes: { photoLikes: userPhotoLikes = 0, videoLikes: userVideoLikes = 0 },
  },
} = user;

console.log(
  `${userName} ${userSurname} aka ${userTag} has ${userFollowers} followers, ${userPhotoLikes} likes on photos and ${userVideoLikes} - on videos.`,
);

/**
 * ДЕСТРУКТУРИЗАЦІЯ МАСИВІВ
 * квадратні дужки, послідовність має значення
 */

const rgb = [200, 255, 100];
const [red, green, blue] = rgb;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

/**
 * ОБ`ЄКТ ПАРАМЕТРІВ
 * замість того, щоб писати нескінченну кількість параметрів функції,
 * а потім передавати незрозумілі аргументи, юзаємо !об`єкт!
 * Там є назва властивості та її значення, а отже зрозуміло, що за аргумент передано.
 */

function objOfParams(book) {
  const { title, author, numOfPages } = book;
  console.log(`Book "${title}" by ${author} has ${numOfPages} pages`);
}

objOfParams({
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  numOfPages: 255,
});

function objOfParams2({ title, author, numOfPages }) {
  console.log(`Book "${title}" by ${author} has ${numOfPages} pages`);
}

objOfParams2({
  title: 'Savrola',
  author: 'Winston Churchill',
  numOfPages: 240,
});
