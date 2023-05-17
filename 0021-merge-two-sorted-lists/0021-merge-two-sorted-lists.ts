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

function mergeTwoLists(list1: CanBeListNode, list2: CanBeListNode): CanBeListNode {

  let mergedListHead! : ListNode
  let mergedListPointer!  : ListNode
  
  function pushNode(pushedNode:ListNode){
    if(!mergedListHead) {
      mergedListHead = mergedListPointer = pushedNode
    }
    else {
      mergedListPointer.next = pushedNode
      mergedListPointer = mergedListPointer.next
    }
  }

  while (list1 && list2) {    
    if(list1.val < list2.val){
      pushNode(list1)
      list1 =  list1.next
    } 
    else {
      pushNode(list2)
      list2 = list2.next
    } 
  }

  pushNode((list1||list2) as unknown as ListNode)
  
  return mergedListHead
};