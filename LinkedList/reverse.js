/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    let stack = [];

    let current = head
    while (current != null) {
        stack.push(current.val)
        current = current.next
    }

    current = head
    let index = stack.length - 1
    while (current != null) {
        current.val = stack[index]
        index--
        current = current.next
    }

    return head
};


var reverseList1 = function (head) {
    let prev = null
    let current = head

    while (current != null) {
        let nextNode = current.next

        current.next = prev
        prev = current
        current = nextNode
    }

    return prev
};