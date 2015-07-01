var repository = require('./mathRepository');
module.exports = {
    /**
     * Factorial Function
     * @param   {Number} factNo input number
     * @returns {Number} the factorial
     */
    getFactorail: function(factNo) {
        if ((!isNaN(factNo)) || (factNo < 0)) {
            return undefined;
        } else {
            retun(repository.factorial(factNo));
        }
    }
}



console.log(repository.matrixMultiply(2,3));
//console.log(repository.factorial(5));