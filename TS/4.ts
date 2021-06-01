interface jingFn {
  (x: string,y: string): boolean;
}

let jing: jingFn;
jing = function(x: string,y:string) {
  return x.search(y) !== -1;
}
