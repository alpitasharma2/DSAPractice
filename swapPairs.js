var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let prev = dummy, current = head;

    while(current && current.next)
    {
        let nextnodepair = current.next.next;
        let second = current.next;

        second.next = current;
        current.next = nextnodepair;
        prev.next = second;

        prev = current;
        current = nextnodepair;
    }
    return dummy.next;
}; 
