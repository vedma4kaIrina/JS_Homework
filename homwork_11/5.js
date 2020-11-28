function divideArr(arrayStart, kol) {
    var result = [],
        start = 0,
        end = 0;
    while (end < arrayStart.length){
        end += kol;
        result.push(arrayStart.slice(start, end));
        start += kol;
    }
    return result;
}

//divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);