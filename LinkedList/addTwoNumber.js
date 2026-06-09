/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function insertInTail(l1, val) {
    let newNode = new ListNode(val)

    let current = l1
    while (current.next != null) {
        current = current.next
    }
    current.next = newNode
}
//  [2,4,3]
let l1 = new ListNode(2)
insertInTail(l1, 4)
insertInTail(l1, 3)

//  [5,6,4]

//  console.log(l1)
let l2 = new ListNode(5)
insertInTail(l2, 6)
insertInTail(l2, 4)

//  console.log(l2)
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    console.log(l1)
    console.log(l2)

    let l1Number = 0
    let current1 = l1
    let count = 0
    while (current1 != null) {
        l1Number += (current1.val * Math.pow(10, count))
        current1 = current1.next
        count++
    }

    if (current1 == null) count = 0

    let l2Number = 0
    let current2 = l2

    while (current2 != null) {
        l2Number += (current2.val * Math.pow(10, count))
        current2 = current2.next
        count++
    }

    if (current2 == null) count = 0

    let sum = l1Number + l2Number

    let l3 = new ListNode(0)
    let tail = l3

    while (sum != 0) {
        let rem = Math.floor(sum % 10)

        tail.next = new ListNode(rem)
        tail = tail.next

        sum = Math.floor(sum / 10)
    }

    return l3.next

};

console.log(addTwoNumbers(l1, l2))