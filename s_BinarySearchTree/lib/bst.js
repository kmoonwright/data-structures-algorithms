class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val, root = this.root) {
        const newNode = new TreeNode(val);
        if (!root){
            this.root = newNode;
            return;
        } 
        if (val < root.val) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insert(val, root.left)
            }
        } else {
            if (!root.right){
                root.right = newNode;
            } else {
                this.insert(val, root.right)
            }
        }
   }

   searchRecur(val, root = this.root) {
        if (!root) return false;

        if (val < root.val) {
            return this.searchRecur(val, root.left)
        } else if (val > root.val) {
            return this.searchRecur(val, root.right)
        } else {
            return true;
        }
   }

   searchIter(val, root = this.root) {
       if (!this.root) return false;
       
        while(root) {
            if (val === root.val) {
                return true;
            } else if (val < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return false;
   }
}

module.exports = {
    TreeNode,
    BST
};