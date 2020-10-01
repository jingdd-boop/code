function flatten(arr){
  return arr.reduce(function(prev,next){
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  },[])
}


function flatten(arr){
  return arr.reduce(function(prev,next){
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  },[])
}



var arr = [1,2,[3,5],[6,[7,8]]]
console.log(flatten(arr));