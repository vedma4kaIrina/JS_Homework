function Animal(nameAnial) {

    this.name = nameAnial;
    this._foodAmount = 50;

    var self = this;

    function formatFoodAmount() {
        return self._foodAmount + ' гр.';
    }

    this.animalFeed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + 'корма.');
    };

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();
        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }
        self._foodAmount = amount;
    }
}

function Cat(name) {

    Animal.apply(this, arguments);

    var parentFeed = this.animalFeed;

    this.animalFeed = function () {
        parentFeed.call(this);
        console.log('Кот доволен ^_^');
        return this
    }
    this.stroke = function () {
        console.log('гладим кота');
        return this
    }
}

var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.dailyNorm(100));
console.log(barsik.animalFeed(barsik.dailyNorm()));
console.log(barsik.animalFeed().stroke().animalFeed().stroke())