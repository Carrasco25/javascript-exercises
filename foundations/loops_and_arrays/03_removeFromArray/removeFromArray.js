const removeFromArray = function(array, ...thingsToRemove) {
    let numbersRemoved= array.filter((item) => !thingsToRemove.includes(item));
    return numbersRemoved;
};


// Do not edit below this line
module.exports = removeFromArray;


// ((item) => item !== 3)

// And item means: one number from array, the one filter is looking at right now. 
// Filter goes through array one at a time, so item is 1, then 2, then 3, then 4.

