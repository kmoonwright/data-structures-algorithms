// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


// OUR SOLUTION
// function isBalanced(root) {
//   if (!root) return false;
//   let leftSubTree = isBalanced(root.left)
//   let rightSubTree = isBalanced(root.right)

//   if (leftSubTree && rightSubTree) {
//     return true;
//   } else {
//     return false;
//   }
// };


// GIVEN SOLUTION
function getHeight(root) {
  if (!root) return -1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBalanced(root) {
  if (!root) return true;
  let heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return heightDifference && isBalanced(root.left) && isBalanced(root.right);
}