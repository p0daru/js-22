/*
 * Наследование
 *  - extends
 *  - super()
 */

// Hero
// class Hero {
//     constructor({ name, xp } = {}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} отримує ${amount} досвіду`);
//         this.xp += amount;
//     }
// }

// class Warrior extends Hero {
//     constructor({ weapon, ...restProps }) {
//         super(restProps);

//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} атакує, використовуючи ${this.weapon}`);
//     }
// }

// const mango = new Warrior({ name: 'Mango', xp: 1500, weapon: 'sword' });
// console.log(mango);
// mango.attack();
// mango.gainXp(800);

// class Bersek extends Warrior {
//     constructor({ warcry, ...restProps } = {}) {
//         super(restProps);

//         this.warcry = warcry;
//     }

//     babyRange() {
//         console.log(this.warcry);
//     }
// }

// const ajax = new Bersek({
//     name: 'Ajax',
//     xp: 1200,
//     weapon: 'ace',
//     warcry: 'Woooooooah',
// });
// console.log(ajax);

// ajax.babyRange();
// ajax.attack();
// ajax.gainXp(799);

// class Mage extends Hero {
//     constructor({ spells = [], ...restProps } = {}) {
//         super(restProps);

//         this.spells = spells;
//     }

//     cast() {
//         console.log(`${this.name} щось там кастує 🧙‍♂️`);
//     }
// }

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
// // console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );

///////////
class StringBuilder {
    constructor(value = '') {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    padEnd(str) {
        // var1
        // const symbols = this.value.split('');
        // symbols.splice(symbols.length, 0, str); // повертає нову довжину масиву
        // this.value = symbols.join('');
        // return this.value;

        // var2
        // const massive = this.value.split(' ');
        // this.value = [...massive, str].join('');
        // return this.value;

        // var3
        this.value = this.value.concat(str);
        return this.value;
    }

    padStart(str) {
        // var1
        // const symbols = this.value.split('');
        // symbols.splice(0, 0, str); // повертає нову довжину масиву
        // this.value = symbols.join('');
        // return this.value;

        // var2
        // const massive = this.value.split(' ');
        // this.value = [str, ...massive].join('');
        // return this.value;

        //var3
        this.value = str.concat(this.value);
        return this.value;
    }

    padBoth(str) {
        this.padEnd(str);
        this.padStart(str);
    }
}

// Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."

// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"

// builder.padStart('^');
// console.log(builder.getValue()); // "^."

// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// splice - повертає масив видалених елементів
// a.length - 1 -> вставка ПЕРЕД останнім елементом (бо якщо елементів 3, то почати з другого. При цьому видалити нуль елементів, тобто поставити на місце 2 елем НОВИЙ елемент)
// const res = a.splice(a.length - 1, 0, 'str'); // повертає масив видалених елементів
// console.log(res); // []
// console.log(a); // [1, 2, 3, "str"]

// push - повертає нову довжину масиву
// const b = [1, 2, 3];
// const res = b.push(7, 9, 0); // повертає масив видалених елементів
// console.log(res); // 6
// console.log(b); // [1, 2, 3, 7, 9, 0]

class Car {
    // Change code below this line
    #brand;

    constructor({ brand, model, price } = {}) {
        this.#brand = brand;
        this.model = model;
        this.price = price;
    }

    getBrand() {
        return this.#brand;
    }

    changeBrand(newBrand) {
        this.#brand = newBrand;
    }

    // Change code above this line
}

const myCar = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 7000,
});

console.log(myCar.getBrand());
myCar.changeBrand('BMW');
console.log(myCar.getBrand());
