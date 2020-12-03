function comparison(objFirst, objSecond) {
    var result;

    if (typeof objFirst == "number"
        || typeof objFirst == "string"
        || typeof objFirst == "boolean"
        || typeof objFirst == "undefined"
        || objFirst === null) {

        if (objFirst !== objSecond) {
            return false
        }
    } else if (Array.isArray(objFirst)) {
            result = [];
            if (objFirst.length === objSecond.length) {
                for (var i = 0; i < returnObj.length; i++) {
                    result[i] = deepClone(objFirst[i]);
                    result = comparison(objFirst[i], objSecond[i]);
                    if (!result) {
                        return false
                    }
                }
            } else {
                return false}
    } else if (typeof objFirst == "object") {

            result = {};

            for (var key in objFirst) {
                if (key in objSecond) {
                    if (typeof objFirst[key] == "number"
                        || typeof objFirst[key] == "string"
                        || typeof objFirst[key] == "boolean"
                        || typeof objFirst[key] == "undefined"
                        || objFirst[key] === null) {

                        if (objFirst[key] !== objSecond[key]) {
                            return false
                        }
                    } else if (Array.isArray(objFirst[key])) {
                        if (objFirst[key].length === objSecond[key].length) {
                            for (var i = 0; i < objFirst[key].length; i++) {
                                result = comparison(objFirst[key][i], objSecond[key][i]);
                                if (!result) {
                                    return false
                                }
                            }
                        } else {
                            return false
                        }
                    } else if (typeof objFirst[key] == "object") {
                        if (objFirst[key].length !== objSecond[key].length) {
                            return false
                        } else {
                            for (var keySecond in objFirst[key]) {

                                if (!keySecond in objSecond[key]) {
                                    return false;
                                }
                            }
                        }
                        result = comparison(objFirst[key], objSecond[key]);
                        if (!result) {
                            return false
                        }
                    }
                    else if(typeof objFirst[key] == "function") {

                        if (objFirst[key] !== objSecond[key]) {
                            return false
                        }

                        //result[key] = function () {};
                        //result[key] = objFirst[key];
                    }
                } else {
                    return false;
                }
            }
    }
    else if(typeof objFirst == "function") {
        if (objFirst !== objSecond) {
            return false
        }
        //result = function () {};
        //result = returnObj;
    }
    return true
}

function deepClone(returnObj) {
    var result;

    if (typeof returnObj == "number"
        || typeof returnObj == "string"
        || typeof returnObj == "boolean"
        || typeof returnObj == "undefined"
        || returnObj === null) {
        result = returnObj;
    }
    else if (Array.isArray(returnObj)) {
        result = [];
        for (var i = 0; i < returnObj.length; i++){
            result[i] = deepClone(returnObj[i]);
        }
    }
    else if(typeof returnObj == "object") {

        result = {};

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
                result[key] = {};
                result[key] = deepClone(returnObj[key]);
            }
            else if(typeof returnObj[key] == "function") {
                result[key] = function () {};
                result[key] = returnObj[key];
            }
        }
    }
    else if(typeof returnObj == "function") {
        result = function () {};
        result = returnObj;
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

//clonedObj.object.object2.array2[1].name = 'Vasya';
//clonedObj.array.push(2);
console.log(comparison(clonedObj, initialObj))
console.log(initialObj);
console.log(clonedObj);