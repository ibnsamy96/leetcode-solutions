/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // recurssion solution
    // if (n == 1) return true
    // else if (n > 1) return isPowerOfTwo(n / 2)
    // else return false
    return checkIntegerMethod1(n)
};

function checkIntegerMethod1 ( n ) {
    // math solution with least significant digit checking
    const power = calculatePowerValue(n)
    const str = new String(power*10)
    return str[str.length-1] == '0' 
}

function checkIntegerMethod2 ( n ) {
    // math solution with conversion to integer
    const power = calculatePowerValue(n)
    return power == parseInt(power)
}

function calculatePowerValue ( n ) {
    return (Math.log(n)/Math.log(2)).toPrecision(12)
}