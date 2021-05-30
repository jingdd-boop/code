## 算法题

## 14、最长公共前缀
### 题目描述
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200818153321911.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)
### 分析
1、当输入的`strs`中无字符串是，返回空 `“ ” `
2、首先初始化定义一个`ans`，初始化它，使其等于`strs[0]`
3、将字符串数组的每一项字符串中的每个字符，和ans中的每一个字符比对
4、一直到不相等，则结束，且用substr()函数，截取到相同的字符串段

> substr()方法可在字符串中抽取从 start 下标开始的指定数目的字符。

5、返回ans，结束
### 图解
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200818154732247.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

### 代码
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) 
        return "";
    let ans = strs[0];
    for(let i =1;i<strs.length;i++) {
        let j=0;
        for(;j<ans.length && j < strs[i].length;j++) {
            if(ans[j] != strs[i][j])
                break;
        }
        ans = ans.substr(0, j);
        if(ans === "")
            return ans;
    }
    return ans;
};
```
### 测试

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200818154848461.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)


## 160、相交链表
### 题目描述
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200907140917786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

### 解题思路
1、要得出相交的节点值，就是要判断两条链表相交的位置
2、首先遍历两条链表
3、将`pA`,`pB`分别指向两条链表的头结点，并且开始往下遍历
4、假设A为长链表，B为短链表
5、我们知道，肯定会出现B链表先遍历到最后的节点，也就是指针指向`null`
6、当出现这种情况时，我们先将pB指向A链表的头结点，继续往下遍历
7、同时，我们也应该知道，此时长链表也会继续遍历，当它的遍历到最后的节点时，也就是指针指向`null`时，我们将`pA`指针指向B的头结点。
8、A,B两条链表继续遍历
9、当两条链表有相交时，输出`pA`
10、当没有交集时，返回`null`
**具体的看下面图解**
### 图解
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200907142741513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200907142906496.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200907143000411.png#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200907143054958.png#pic_center)
此刻`pB`指向`null`，这时我们让`pB`指向`A长链表`的头结点
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200907143250410.png#pic_center)
继续遍历，一直到`pA`指向`null`（此处过程省略，和上面一样）
将`pA`指向`pB`的头结点
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200907143605240.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)
我们可以看到，这时`pA`到了`B链表`的9的位置，`pB`到了`A链表`的4的位置，之后它们会相交
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200907143839766.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)
当然也有可能存在没有相交的情况，如果没有相交我们将返回`null`
### 代码

```javascript
var getIntersectionNode = function(headA, headB) {
  //清除高度差
  //同时遍历两个链表
  //一直往下遍历，会发现，短链表会先遍历完，为null，然后短链表的指针指向长链表的头指针，
  //接着当，长链表遍历到最后指向null时，将长链表的指针指向短链表的头结点
  //继续遍历，如果有相交，则会出现重合返回pA，否则返回null
  let pA = headA;
  let pB = headB;
  while(pA || pB){
    if(pA === pB) return pA;
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
}
```

### 运行
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200907144009673.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)


## 141.环形链表
### 题目描述
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020082715233873.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

### 解题思路
**判断是否存在环，方法很多，这里使用的是快慢指针的方法。
快指针比慢指针移动多一个节点**
1、没有环的情况，可以确定快指针一定比慢指针最先走完

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200827153036652.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)
2.如果有环的话，则会存在两个指针相遇的时候，只要出现这种情况，可认为是存在环的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200827154100930.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

### 代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = (head) => {
  let fastP = head;
  let slowP = head;
  while (fastP) {                         
    if (fastP.next == null) return false; 
    slowP = slowP.next;                   
    fastP = fastP.next.next;             
    if (slowP == fastP) return true;      // 快慢指针相遇，有环
  }
  return false;                           // fastP指向null了，也始终不相遇
}
```


### 运行
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200827154323807.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

