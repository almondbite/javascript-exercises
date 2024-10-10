const removeFromArray = function(array, ...ele) {
    return array.filter(item => !ele.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
