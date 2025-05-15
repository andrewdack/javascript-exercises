const sumAll = function(num1, num2) {
    // guard clauses against non-acceptable parameters
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    
    let startNum = Math.min(num1, num2);
    let endNum = (startNum === num1) ? num2 : num1;

    let sum = 0;
    for (let num = startNum; num <= endNum; num++) {
        sum += num;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
