function Node(data) {
    this.data = data;
    this.next = null;
}

// Insertion at the end of the linked list
function insertAtEnd(head, data) {
    let newNode = new Node(data);

    if (head === null) {
        return newNode;
    }

    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    tail.next = newNode;
    return head;
}

let head = new Node(10);

console.log(head); // Node { data: 10, next: null }
head = insertAtEnd(head, 20);
console.log(head); // Node { data: 10, next: Node { data: 20, next: null } }


// Insertion at the start of the linked list
function insertAtStart(head, data) {
    let newNode = new Node(data);
    newNode.next = head;
    return newNode;
}

head = insertAtStart(head, 5);
console.log(head); // Node { data: 5, next: Node { data: 10, next: Node { data: 20, next: null } } }


// Traversing the linked list
function traverse(head) {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}

function insertAtIndex(head, data, index) {
    let newNode = new Node(data);

    let idx = 0;
    if (index === 0) {
        newNode.next = head;
        return newNode;
    }
    let current = head;
    while (current !== null && idx < index - 1) {
        current = current.next;
        idx++;
    }
    if (current === null) {
        throw new Error("Index out of bounds");
    }
    newNode.next = current.next;
    current.next = newNode;
    return head;
}

head = insertAtIndex(head, 15, 2);

console.log("Traversing the linked list:");
traverse(head); // Output: 5, 10, 20