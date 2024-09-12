const removeFromArray = function(array, ...ele) {
    // const position = array.indexOf(ele);
    // const remove = array.splice(position, 1);
    

    // for (i = array.length - 1; i >= 0; i--) {
    //     array.splice(ele[i], 1);
    // }
    // return array;

    // if (!Array.isArray(ele)) {
    //     ele = [ele];
    // }

    // return array.filter(function(item) {
    //     return !ele.includes(item);
    // });

    return array.filter(item => !ele.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
