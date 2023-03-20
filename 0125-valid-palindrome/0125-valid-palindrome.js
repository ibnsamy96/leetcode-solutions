/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let text = getAlphanumerics(s)
    
    if (text === null) return true
    text = text.join('').toLowerCase()
    
    let n = 0
    let m = text.length - 1
    while(m>n){
        if (text[n]!=text[m]) return false
        n++, m--;
    }
    return true
};

function getAlphanumerics(string) {
    const reg = /[A-Za-z0-9]/g
    return string.match(reg)
}
