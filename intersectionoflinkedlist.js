var getIntersectionNode = function(headA, headB) {
    let a = headA, b= headB
    while(a!==b)
    {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    // condition ? valueIfTrue : valueIfFalse
    // if a reaches to the end of the list then it will point to headB and if not a = a.next then it will keep moving.
    return a
};

// 2 
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null

    let p = headA;
    let q = headB;

    while(p!==q)
    {
        if(p === null)
        {
            p = headB;
        }else{
            p = p.next;
        }

        if(q === null)
        {
            q = headA;
        }else{
            q = q.next;
        }
    }
    return p;
};
