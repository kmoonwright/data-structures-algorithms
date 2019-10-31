// function treeHeight(root) {
//     if (!root) return -1;
//     if (!root.left && !root.right) return 0;
//     let stack = [root]
//     let count = 0;
//     let nodeCount = 0;
//     while (stack.length) {
//         let node = stack.pop();
//         // nodeCount += 1;
        

//         if (node.right) { 
//             nodeCount += 1;
//             stack.push(node.right) 
//         } 
//         if (node.left) {
//             // nodeCount += 1;
//             stack.push(node.left)
//         }

//         if (!node.right && !node.left && nodeCount > count) {
//                 count = nodeCount
//                 nodecount = 0;
//         }
    
//     }
//     return count;
// }

function treeHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}

module.exports = {
    treeHeight
};