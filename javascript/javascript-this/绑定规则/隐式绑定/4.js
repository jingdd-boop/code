function foo() {
  console.log(this.a);
}
function dFoo(fn) {
  fn()
}
var obj = {
  a:2,
  foo:foo
}
var a = "jing";
dFoo(obj.foo);//jing