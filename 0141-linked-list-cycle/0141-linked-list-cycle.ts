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

function hasCycle(head: ListNode | null): boolean {
    const nodes :ListNode[] = []
    
    while(head){
        if(nodes.includes(head)) return true
        nodes.push(head)
        head=head.next
    }
    
    return false
};