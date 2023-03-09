/**
 * @param {string} address
 * @return {string}
 */
// var defangIPaddr = function(address) {
//      // runtime =~ 65ms
//     return address.replace(/\./g,'[.]')
// };

// var defangIPaddr = function(address) {
//      // runtime =~ 125ms
//     return address.split('.').join('[.]')
// };

var defangIPaddr = function(address) {
   // runtime =~ 75ms
    let defanged = ''
    for (const char of address) {
        if (char == '.' ) defanged += '[.]'
        else defanged += char
    }
    return defanged
};