var isPalindrome = function(head) {
  if(head === null || head.next === null) return true;
  let mid = head;
  let pre = null;
  let reversed = null;
  //end 每次走两步，这个循环的时间复杂度为O(n/2)
  //循环条件：只要head存在则最少走一次
  while(head !== null && head.next !== null){  
    pre = mid;//这个赋值要在mid被修改前提前
    //遍历链表
    mid = mid.next;//中间指针一次走一格  
    head = head.next.next;//指针一次走两个
    //通过迭代来反转前半部分的链表，
    //反转前面部分的节点，并用reversed保存
    pre.next = reversed;
    reversed = pre;
  }
  //奇数情况分开讨论
  if(head) mid = mid.next;
  while(mid){
    if(reversed.val !== mid.val) return false;
    reversed = reversed.next;
    mid = mid.next;
  }
  return true;
}

//10/11
var isPalindrome = function(head) {
  if(head === null && head.next === null) return true
  let mid = head;
  let pre = null;
  let rev = null;
  while(head !== null && head.next !== null) {
    pre = mid;
    mid = mid.next;
    head = head.next.next;
    pre.next = rev;
    rev = pre;
  } 

  //奇数时，mid再向后移一位
  if(head) mid = mid.next;
  //比较前部分和后部分的值是否一致
  while(head !== null && head.next !== null) {
    if(rev.val !== mid.val) return false;

    rev = rev.next;
    mid = mid.next;
  }
  return true;
}
// 取链表中间值，迭代反转前部分链表；