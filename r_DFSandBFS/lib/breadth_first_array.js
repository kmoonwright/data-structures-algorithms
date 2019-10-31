function breadthFirstArray(root) {
    let stack = [ root ];
    let ans = []

    while (stack.length){
        let node = stack.shift();
        ans.push(node.val)
        

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return ans;
}

module.exports = {
    breadthFirstArray
};