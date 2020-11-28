function filterNumbersArr(value) {
    return value > 0;
}

var arrayStart = [-1, 0, 2, 34, -2];

arrayStart.filter(filterNumbersArr);