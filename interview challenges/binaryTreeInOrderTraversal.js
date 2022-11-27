function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

var node3 = new TreeNode(3,null,null)
var node2 = new TreeNode(2,node3,null)
var node1 = new TreeNode(1,null,node2)
console.log(node1);
debugger;


var inorderTraversal = function(root) {

  //I binary tree
  //O array of traversal order

  var result = [];

  var dfs = (root) => {
    if(root != null) {
      dfs(root.left);
      result.push(root.val);
      dfs(root.right);
    }
  }

  dfs(root);

  return result;

};

console.log(inorderTraversal(node1));
