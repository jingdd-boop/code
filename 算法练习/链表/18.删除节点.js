/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let pre = new ListNode(-1);
  pre.next = head;

  let node = pre;
  while(node.next) {
    if(node.next.val === val) {
      node.next = node.next.next;
      break;
    }
    node = node.next;//表示后面的节点向前移一位
  }
  return pre.next;
}