/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const origin = ('' + x).split('');
    const reversed = ('' + x).split('').reverse();
    for (let i = 0; i < origin.length; ++i) {
        if (origin[i] !== reversed[i])
            return false;
    }
    return true;
};
