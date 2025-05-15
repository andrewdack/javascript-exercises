const removeFromArray = function(arr, ...args) {
    // test 1
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === num) {
    //         arr.splice(i, 1);
    //     }
    // }

    
    return arr.filter((val) => {return !args.includes(val)} );
};

// Do not edit below this line
module.exports = removeFromArray;
