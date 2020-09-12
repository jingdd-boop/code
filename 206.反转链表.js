/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//迭代
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while(curr != null){
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
};

//创建一个哨兵节点prev指向null
//设置一个curr指向head
//遍历整个链表(条件：直到当curr指向不为null时)
//在遍历过程中，让curr的指针指向next
//将next指向prev
//将prev指向curr
//将curr指向next



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 
 * @param {ListNode} head
 * @return {ListNode}
 */
//递归
var reverseList = function(head) {
  if(!head || !head.next) return head;

  let next = head.next;
  let revereHead = revereList(next);
  head.next = null
  next.next = head
  return revereHead
};


