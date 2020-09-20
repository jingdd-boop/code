/*
 * @lc app=leetcode id=21 lang=javascript
 *
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 伪头节点 dum ，节点 cur 指向 dum。
  let cur = new ListNode();
  const dum = cur;
//循环判断终止条件是l1,l2是否文空，如果为空就跳出循环
  while (l1 || l2) {
    //有两个特殊的情况，就是l1或者l2如果一个为null的话
    if (!l1) {
      cur.next = l2;
      return dum.next;
    } else if (!l2) {
      cur.next = l1;
      return dum.next;
    }
    //当两条链表都存在的话，比较各自元素的大小
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  return dum.next;
};



