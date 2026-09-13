/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];

    function backtrack(str, open, close) {

        // Base case
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }

        // Add '(' if we still have opening brackets
        if (open < n) {
            backtrack(str + "(", open + 1, close);
        }

        // Add ')' only if it won't make the string invalid
        if (close < open) {
            backtrack(str + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return result;
};