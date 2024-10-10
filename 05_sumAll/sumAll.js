const sumAll = function(start, end) {
    let sum = 0;
    if ((start || end) > 0 && Number.isInteger(start || end) && (typeof (start && end) === 'number')) {       
        if (start < end) {
            for (i = start; i <= end; i++) {
                sum += i;
            }
        } else {
            for (i = end; i <= start; i++) {
                sum += i;
            }
        }
        return sum;      

    } else {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = sumAll;


