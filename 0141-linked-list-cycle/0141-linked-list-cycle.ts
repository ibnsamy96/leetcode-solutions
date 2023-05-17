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

type CanBeListNode = ListNode | null
function hasCycle(head: CanBeListNode): boolean {

    if(!head?.next) return false 

    let slowPointer :CanBeListNode = head    
    let fastPointer :CanBeListNode = head

    while(true){
        slowPointer = slowPointer?.next || null
        fastPointer = fastPointer?.next?.next?.next || null
        if(fastPointer==null) break
        const isCycleHappened = slowPointer==fastPointer || slowPointer?.next===fastPointer
        if(isCycleHappened)  return true
    }
    
    return false
};


// function hasCycle(head: ListNode | null): boolean {
//     const nodes :ListNode[] = []
    
//     while(head){
//         if(nodes.includes(head)) return true
//         nodes.push(head)
//         head=head.next
//     }
    
//     return false
// };