/**
 * Factorial Function
 * @param   {Number} factNo input number
 * @returns {Number} the factorial
 */
function factorial(factNo) {
    try {

        var result = 1;
        for (var i = 1; i <= factNo; i++) {
            result *= i;
        }
        return ({
            result: result,
            msg: 'successfull'
        });
    } catch (err) {
        return {
            result: undefined,
            msg: err
        };
    }
}

/**
 * [[Description]]
 * @param {[[Type]]} a [[Description]]
 * @param {[[Type]]} b [[Description]]
 */
function matrixMultiply(a, b) {
    if ((a.constructor === Array) && (b.constructor === Array)) { // Both of them are arrays
        if (a[0].length > 0) { // a is 2d
            if (b[0].length > 0) { //b is also 2d
                console.log('Multiply 2d X 2d');
            } else { // b is 1d
                console.log('multiply 2d X 1d');
            }
        } else {
            if (b[0].length > 0) { //b is 2d
                console.log('nultiple 1d X 2d');
            } else {
                console.log('multiply 1d X 1d');
            }
        }
    } else { // one of them is not an array
        if (a.constructor === Array) { // a is array and b is a number
            console.log('multiply Array by number');
        } else if (b.constructor === Array) { // a is a number and b is an array
            console.log('multiply number X Array');
        } else { // both of them are numbers
            return {result:(a*b),msg:'successfull'};
        }

    }
}




module.exports.factorial = factorial;
module.exports.matrixMultiply = matrixMultiply;