// binary into integer
var getDecimalValue = function(head) {
    let total = " ";
    while(head)
    {
        total = total + head.val;
        head = head.next;
    }
    return parseInt(total, 2);
};

// reverse a linkedlist
var reverseList = function(head) {
    let node = null;

    while (head) {
        const temp = head.next;
        head.next = node;
        node = head;
        head = temp;
    }

    return node;    
};

// 
