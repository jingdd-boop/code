function counterCreator() {
  var index = 1;
  function counter() {
      return index ++;
  }
  return counter;
}

// test
var counterA = counterCreator();
var counterB = counterCreator();
counterA();     // 1
counterA();     // 2
counterB();     // 1
counterB();     // 2