/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

/**
 * АЛГОРИТМ
 * 1. За допомогою оператора new викликається функція Car().
 * 2. Десь у пам`яті створюється ПУСТИЙ об`єкт
 * 3. Функція Car викликається у контексті цього об`єкта (this посилається на цей пустий об`єкт)
 * 4. Коли функція закінчила своє виконання, посилання на цей об`єкт повертається на місце виклика
 */

// функція-конструктор
const Car = function ({ brand, model, price } = {}) {
  // const { brand, model, price } = config; // деструктуризація

  // 2. Функція викликається в контексті створеного об`єкта, тобто в this записується посилання на нього
  this.brand = brand;
  this.model = model;
  this.price = price;

  // 3. У властивість this.__proto__ записується посилання на об`єкт Car.prototype, тобто Car.prototype - це ПРОТОТИП майбутнього об`єкта (екземпляра)

  // 4. Посилання на об`єкт повертається у місце виклику new Car
};

Car.prototype.sayHi = function () {
  console.log('this sayHi -> ', this);
  console.log('hello');
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.prototype.changeModel = function (newModel) {
  this.model = newModel;
};

// 1. Якщо ф-ція викликається через new, створюється пустий об`єкт
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(1000);
// console.log(myCar);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 50000,
// });
// console.log(myCar2);

// myCar2.changeModel('x5');
// console.log(myCar2);

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

const mango = new User({ email: 'mango@gmail.com', password: 'qweqweqwe167' });
// console.log(mango);

User.prototype.changePassword = function (newPassword) {
  this.password = newPassword;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

// mango.changePassword('45678');
// mango.changeEmail('new-email@gmail.com');
// console.log(mango);

/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

// console.log(Math.PI); // статична властивість
// console.log(Math.round(15.9989)); // статичний метод

// User.message =
//   'Я статична властивість, мене немає на екземплярах або в прототипі';

// console.log(User.message);
// console.log(mango); // немає на екземплярі і в прототипі

// User.logInfo = function (obj) {
//   console.log('User.logInfo -> obj', obj);
//   console.log('Почта: ', obj.email);
//   console.log('Пароль: ', obj.password);
// };

// Object.keys();
// Object.value();

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литерала обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Функция()
