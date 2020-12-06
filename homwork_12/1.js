function rewriteObject(startArray) {
    return startArray.map(function (startArray) {
        return {name : startArray}
    })
}
var array = ['Вася','Коля', 'Федя'];
rewriteObject(array)
