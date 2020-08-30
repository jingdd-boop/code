var hasCycle = (head) => {
  let fastP = head;
  let slowP = head;
  while(fastP) {
    if(fastP.next == null) return false;
    slowP = slowP.next;
    fastP = fastP.next.next;
    if(slow == fastP) return true
  }
  return false
}

