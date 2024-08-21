/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */
class Car {
    static description = 'Клас, який описує автомобіль';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this._model = model;
        this._price = price;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }
}

const carInstance = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});

console.log('carInstance.model -> ', carInstance.model);
carInstance.model = 'Q12';
console.log('carInstance.model -> ', carInstance.model);

console.log('carInstance.price -> ', carInstance.price);
carInstance.price = 9000;
console.log('carInstance.price -> ', carInstance.price);

console.log(Car.description);
