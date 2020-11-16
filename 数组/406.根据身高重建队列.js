/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let ans = [];
  if(!people || !people.length) {return []}
  people.sort((a,b) => {
      if(a[0]===b[0]) {
        return a[1]-b[1]
        //第一位相等的话
        //第二位正序排
      } else{
        return b[0]-a[0]
        //第一位不相等的话，反序排
    }
  })
  people.forEach(item=>{
    ans.splice(item[1],0,item)
  })
  return ans;
}
