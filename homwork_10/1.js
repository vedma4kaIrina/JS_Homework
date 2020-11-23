function Animal(nameAnial) {
    this.name = nameAnial;
    this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
}

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + 'корма.');
};

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();
    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }
    this._foodAmount = amount;
}

function Cat(name) {
    this.name = name;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this
}

Cat.prototype.stroke = function () {
    console.log('гладим кота');
    return this
}

var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.dailyNorm(100));
console.log(barsik.feed(barsik.dailyNorm()));
console.log(barsik.feed().stroke().feed().stroke())