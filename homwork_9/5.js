function Animal(nameAnial) {

    this.name = nameAnial;
    var foodAmount = 50;

    var self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + 'корма.');
    };

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();
        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }
        foodAmount = amount;
    }
}

function Cat(name) {

    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function () {
        animalFeed();
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
console.log(barsik.feed(barsik.dailyNorm()));
console.log(barsik.feed().stroke().feed().stroke())