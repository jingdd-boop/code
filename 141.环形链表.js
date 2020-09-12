var hasCycle = (head) => {
  let fastP = head;
  let slowP = head;
  while(fastP) {
    if(fastP.next == null) return false;
    slowP = slowP.next;
    fastP = fastP.next.next;
    if(slowP  == fastP) return true
  }
  return false
}

var hasCycle = (head) => {
  let fastP = head;
  let slowP = head;
  while(fastP){
    if(fastP.next == null) return false;
    slowP = slowP.next;
    fastP = fastP.next.next;
    if(slowP == fastP) return true;
  }
}

//1、单链表反转---206
//2、链表中环的检测---141
//3、两个有序链表的合并---剑指offer25
//4、删除链表倒数第n个节点---19
//5、求链表的中间节点---面试题02.03