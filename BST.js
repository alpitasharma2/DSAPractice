//inorder traversal.
var inorderTraversal = function(root) {
    let res = [];
    helper(root,res);
    return res;
};
var helper = function(root,res)
{
    if(root!==null)
    {
        helper(root.left,res);
        res.push(root.val);
        helper(root.right,res);
    }
}

// invert a binary tree
var invertTree = function(root) {
    if(root === null)
    {
        return null;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};
