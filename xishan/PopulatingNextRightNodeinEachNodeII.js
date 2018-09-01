/**
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:

        (cur)
         1 -> NULL
       /  \ (prev)
(head)2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL

Solution: using three pointer is very important
*/

const connect = (root) => {
  let head = null;
  let prev = null;
  let cur = root;
  while(cur !== null) {
    while(cur !== null) {
      if (cur.left !== null) {
        if (prev != null) {
          prev.next = cur.left;
        } else {
          head = cur.left;
        }
        prev = cur.left;
      }
      if (cur.right !== null) {
        if (prev != null) {
          prev.next = cur.right;
        } else {
          head = cur.right;
        }
        prev = cur.right;
      }
      cur = cur.next;
    }
    cur = head;
    head = null;
    prev = null;
  }
};
