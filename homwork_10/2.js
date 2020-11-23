function deepClone(returnObj) {
    var result = {};
    for (var key in returnObj) {
        if (typeof returnObj[key] == "number"
            || typeof returnObj[key] == "string"
            || typeof returnObj[key] == "boolean"
            || typeof returnObj[key] == "undefined"
            || returnObj[key] === null) {

            result[key] = returnObj[key];}
        else if (Array.isArray(returnObj[key])) {
            result[key] = [];
            for (var i = 0; i < returnObj[key].length; i++){
                result[key][i] = deepClone(returnObj[key][i]);
            }
        }
        else if(typeof returnObj[key] == "object") {
            result[key] += {};
            result[key] = deepClone(returnObj[key]);
        }
        else if(typeof returnObj[key] == "function") {
            result[key] += function () {};
            result[key] = returnObj[key];
        }
    }
    return result
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);