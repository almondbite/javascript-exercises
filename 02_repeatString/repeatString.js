const repeatString = function(str, num) {
    let emptyStr = "";
    if (num === -1) {
        return "ERROR";
    } else {
    for (i = 0; i < num; i++) {
        emptyStr += str;
    }
    return emptyStr;
    }
};

// Do not edit below this line
module.exports = repeatString;
