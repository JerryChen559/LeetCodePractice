// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// -------------------------------------------------------------------------------

// linked lists

var mergeTwoLists = function(l1, l2) {
  // create dummy node to get started
  let mergedLinkedListHead = { val: -1, next: null };

  let runner = mergedLinkedListHead;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      runner.next = l2;
      l2 = l2.next;
    } else {
      runner.next = l1;
      l1 = l1.next;
    }
    runner = runner.next;
  }

  // In that case l1, will point to null and while loop will break
  // Simply point runner to l2. We do not have to add individual nodes
  runner.next = l1 || l2;

  return mergedLinkedListHead.next;
};
