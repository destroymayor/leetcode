/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    if (!subRoot) {
      return true
    }

    if (!root) {
      return false
    }

    if (this.sameTree(root, subRoot)) {
      return true
    }

    return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
  }

  sameTree(p, q) {
    if (!p && !q) {
      return true
    }

    if (p && q && p.val === q.val) {
      return this.sameTree(p.left, q.left) && this.sameTree(p.right, q.right)
    } else {
      return false
    }
  }
}
