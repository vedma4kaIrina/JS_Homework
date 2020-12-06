function rewriteObject(startArray) {
    return startArray.reduce(function (p, startArray) {
        return p + ' : ' + startArray;
    }, 'Текущее время')
}
var array = ['00', '13', '24'];
rewriteObject(array)
