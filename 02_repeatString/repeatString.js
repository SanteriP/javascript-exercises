const repeatString = function(userString,times) {
    finalString = '';
    if (times >= 0) {
        for (let i = 0; i < times; i++) {
            finalString += userString;
        }
    }
    else {
        return 'ERROR';
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
