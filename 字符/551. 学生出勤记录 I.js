/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  if(s.indexOf('A') === s.lastIndexOf('A') && s.indexOf('LLL') === -1) {
    return true
} else {
    return false
}
}