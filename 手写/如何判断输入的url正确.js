function isUrl(url){
  try{
    new URL(url);
    return true;

  }
   
  catch(err){
    return false
  }
}
console.log(new URL('http://www.baidu.com'))