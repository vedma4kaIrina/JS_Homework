function firstPositive(value) {
        return value > 0;
}

var n,
    mas = [];

while (true){
    n = prompt('Введите число');
    if (!!n) {
        mas.push(n);
    } else break;
}

console.log(mas);
mas.find(firstPositive);