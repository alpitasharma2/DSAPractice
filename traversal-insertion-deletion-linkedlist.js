function traverseLinkedlist(head){
    let current = head;
    while(current != null){
        console.log(current.data + " ");
        current = current.next;
    }
    console.log();
}

function searchlinkedlist(head, target){
    while(head !== null){
        if(head.data === target)
        {
            return true;
        }head = head.next;
    }
    return false;
}

function lengthlinkedlist(head)
{
    let length = 0;
    let current = head;
    while(current !== null)
    {
        length++;
        current = current.next;
    }
    return length;
}

function insertatbeginning(head,value)
{
    let newNode = new Node(value);
    newNode.next = head;
    head = newNode;
    return head;
}

function insertAtend(head, value)
{
    let newNode = new Node(value);
    if(head === null)
    {
        return newNode;
    }
    let current = head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
    return head;
}

function insertAtSpecificPosition(head, position, value){
    let newNode = new Node(value);
    if(position === 0){
        newNode.next = head;
        return newNode;
    }
    
    let current = head;
    let prev = null;
    let index = 0;
    
    while(current!== null && index < position)
    {
        prev = current;
        current = current.next;
        index++;
    }
    newNode.next = current;
    if(prev!=null)
    {
        prev.next = newNode;
    }
    return head;
}
