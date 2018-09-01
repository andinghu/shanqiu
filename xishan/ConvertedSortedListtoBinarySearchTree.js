/**
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
*/

const sortedListtoBST = (root) {
  if (root == null) return null;
  return toBST(root, null);
}

const toBST = (head, tail) {
  if (head === tail) {
    return null;
  }
  let slow = head;
  let fast = head;
  while(fast.next !== tail && fast.next.next !== tail) {
    slow = slow.next;
    fast = fast.next.next;
  }
  TreeNode newHead = new TreeNode(slow.val);
  newHead.left = toBST(head, slow);
  newHead.right = toBST(slow.next, tail);
  return newHead;
}
