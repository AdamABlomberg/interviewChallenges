/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {

    var num = n.toString(2).split('').reverse().join('');
    return parseInt(num,2);

};

console.log(reverseBits(00000010100101000001111010011100));