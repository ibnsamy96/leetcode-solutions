/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteMiddle(head: ListNode | null): ListNode | null {

    if(!head || !head.next) return null

    /*
    using the slow-pointer and fast-pointer approach to locate the middle node and the node
    previous it
    */
    let p1 = null
    let p2 = head
    let p3 = head
    while (p3 && p3.next) {
        p1 = p2
        p2 = p2.next
        p3 = p3.next.next
    }

    /*
    connection the previous node to the next of the middle and removing connection between the
    middle node and it's next one
    */
    const [newMiddleNode , oldMiddleNode] = [p1,p2]
    newMiddleNode.next = oldMiddleNode?.next 
    oldMiddleNode.next = null

    return head
};