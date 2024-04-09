const sumAll = function(rangeStart,rangeEnd) {
    let sum = 0;

    if (rangeStart < 0 || rangeEnd < 0) {
        return 'ERROR';
    }

    if (typeof(rangeEnd) != "number" || typeof(rangeStart) != "number") {
        return 'ERROR';
    }

    if (rangeStart < rangeEnd) {
        for (let number = rangeStart; number <= rangeEnd; number++) {
            sum += number;
        }
    }
    else {
        for (let number = rangeStart; number >= rangeEnd; number--) {
            sum += number;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
