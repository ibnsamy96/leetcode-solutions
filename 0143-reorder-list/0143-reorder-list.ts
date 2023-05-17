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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {

  if(!head)return

  // get the last node ✅
  let last: ListNode = head
  let numberOfNodes = 1
  while (last.next) {
      numberOfNodes+=1
      last = last.next
      }

  // get the middle node ✅
  let middle : ListNode  = head
  let i = 0
  while (i< Math.trunc(numberOfNodes/2)){
    middle = middle.next as unknown as ListNode
    i++
  }

  // reversing the right part ✅
  let prev : ListNode = middle
  let current : ListNode | null = middle.next
  let next : ListNode | null = current?.next || null
  const reversedSecondHalf = reverseLinkedList(current,prev,next)
  middle.next = null

  // compine the two lists ✅
  combineTwoLinkedListsNodeByNode(head,reversedSecondHalf)
  
};

function reverseLinkedList(head:ListNode | null,prev:ListNode | null=null,next:ListNode | null=null) : ListNode{

  while(head){
    head.next = prev
    prev = head
    head = next
    if ( head ) next = head.next
  }
  return prev as unknown as ListNode
}

function combineTwoLinkedListsNodeByNode(list1:ListNode| null,list2:ListNode| null){
  if (!list1) return list2;
  if (!list2) return list1;

  let list1NextPointer : ListNode| null= list1?.next||null
  let list2NextPointer : ListNode| null= list2?.next||null

  while(list2 && list2?.next){

    (list1 as unknown as ListNode).next = list2;
    list2.next = list1NextPointer;

    list1 = list1NextPointer;
    list2 = list2NextPointer;

    list1NextPointer = list1?.next || null;
    list2NextPointer = list2?.next || null;

  }

}