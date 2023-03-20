/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    
    let max = 0

    for (const char of n)
        if (parseInt(char)>max) max = parseInt(char)
    
    return max
};