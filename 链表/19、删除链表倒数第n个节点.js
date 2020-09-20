var removeNthFromEnd = function(head, n) {
  //创建一个头结点，
  let preHead = new ListNode(0)
  preHead.next = head
  let fast = preHead
  let slow = preHead
  while(n--){
    fast = fast.next
  }
  while(fast && fast.next){
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return preHead.next

};

var removeNthFromEnd = function(head, n) {
  let preHead = new ListNode(0)
  preHead.next = head
  let fast = preHead
  let slow = preHead
  while(n--){
    fast = fast.next
  }
  while(fast && fast.next){
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return preHead.next
}