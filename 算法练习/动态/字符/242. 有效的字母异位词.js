/**
 * @param {string} s
 * @param {string} t
 * @param {boolean}
 */
const isAnagarm = (s,t) => {
  //两重变量
  if(s.length !== t.length) return false;
  let ssort = s.sort;
  let tsort = t.sort;
  for(let sn of ssort) {
      for(let tn of tsort) {
          if(sn === tn) {
              return true
          } else return false;
      }
  } 
  // 扩展运算符
  return s.length == t.length && [...s].sort.join('') === [...t].sort.join('');


  
}