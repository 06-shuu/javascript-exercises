const palindromes = function (str) {
    /**
     * 1. delete spaces and punctuations
     * 2. reverse the string
     * 3. check the equality between the original string and the reversed one
     */

    const clearString = str.replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase()
    const reversedString = clearString.split('').reverse().join('');
    return clearString === reversedString

};

console.log(palindromes("A car, a man, a maraca"))
// Do not edit below this line
module.exports = palindromes;
