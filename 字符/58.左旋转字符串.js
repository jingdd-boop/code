/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

var reverseLeftWords = function(s, n) {
  // return s.slice(n) + s.slice(0,n);
  return s.substring(n,s.length) + s.substring(0,n);
};