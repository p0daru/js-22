/*
 * Наследование
 *  - extends
 *  - super()
 */

// Hero
class Hero {
    constructor({ name, xp } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} отримує ${amount} досвіду`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor({ weapon, ...restProps }) {
        super(restProps);

        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакує, використовуючи ${this.weapon}`);
    }
}

const mango = new Warrior({ name: 'Mango', xp: 1500, weapon: 'sword' });
console.log(mango);
mango.attack();
mango.gainXp(800);

class Bersek extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRange() {
        console.log(this.warcry);
    }
}

const ajax = new Bersek({
    name: 'Ajax',
    xp: 1200,
    weapon: 'ace',
    warcry: 'Woooooooah',
});
console.log(ajax);

ajax.babyRange();
ajax.attack();
ajax.gainXp(799);

class Mage extends Hero {
    constructor({ spells = [], ...restProps } = {}) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} щось там кастує 🧙‍♂️`);
    }
}

const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
console.log(poly);
poly.cast();
poly.gainXp(200);

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
