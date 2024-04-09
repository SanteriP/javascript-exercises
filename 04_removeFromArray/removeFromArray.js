const removeFromArray = function(array, ...args) {
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        for (let argIndex = 0; argIndex < args.length; argIndex++) {
            if (array[arrayIndex] === args[argIndex]) {
                array.splice(arrayIndex, 1);
                arrayIndex--;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
