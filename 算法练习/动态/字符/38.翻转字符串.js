var reverseWords = function (s) {
  return s
    .split(" ")
    .filter(Boolean)
    .map(str => String.prototype.trim.call(str))
    .reverse()
    .join(" ");
}