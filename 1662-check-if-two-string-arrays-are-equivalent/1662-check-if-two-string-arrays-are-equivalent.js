/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
// var arrayStringsAreEqual = function(word1, word2) {
//     return word1.join('') == word2.join('')
// };
var arrayStringsAreEqual = function(word1, word2) {

let checker1 = ''
let checker2 = ''

for ( const word of word1 ) checker1 += word
for ( const word of word2 ) checker2 += word


return checker1 == checker2

}