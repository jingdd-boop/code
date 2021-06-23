/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
 function defineReactive (obj,key,val) {
    // 如果只传了obj和key，那么val = obj[key]
    if (arguments.length === 2) {
      val = obj[key]
    }
    if(typeof val === 'object'){
        new Observer(val)
    }
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get(){
        console.log(`${key}属性被读取了`);
        return val;
      },
      set(newVal){
        if(val === newVal){
            return
        }
        console.log(`${key}属性被修改了`);
        val = newVal;
      }
    })
  }