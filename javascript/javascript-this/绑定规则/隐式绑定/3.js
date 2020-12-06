function foo() {
  console.log(this.a);
}
var obj = {
  a:2,
  foo:foo
};
var bar = obj.foo;//引用的foo函数本身->指向全局
var a = "jingjing";
obj.foo(); //2，指向obj
bar(); //jingjing
