const repeatString = function(str, repeatNumTimes) {
    if (repeatNumTimes < 0) {
        return 'ERROR';
    }
    
    let res = "";
    for (let i = 0; i < repeatNumTimes; i++) {
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
