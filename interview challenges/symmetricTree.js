function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

node3A = new TreeNode(2, null, null)
node2A = new TreeNode(2, null, null)
node1A = new TreeNode(1, node2A, node3A)

console.log(node1A);

// var isSymmetric = function(root) {

//   if(root.left === null && root.right === null) {
//     return true;
//   }

//   var symmetric = (leftNode, rightNode) => {
//     if(leftNode.left.val === rightNode.right.val && leftNode.right.val === rightNode.left.val) {
//       symmetric(leftNode.left, rightNode.right);
//       symmetric(leftNode.right, rightNode.left);
//     } else {
//       return false;
//     }
//   }

//   if(root.left.val === root.right.val) {
//     symmetric(root.left,root.right)
//   } else {
//     return false;
//   }

// return true;

// };

var isSymmetric = function(root) {
  if(!root)
      return true;
  return dfs(root.left, root.right);

  function dfs(leftNode, rightNode) {
      if (!leftNode && !rightNode) {
          return true;
      }
      if(leftNode && !rightNode || !leftNode && rightNode || leftNode.val !== rightNode.val) {
          return false;
      }
      return dfs(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right);
  }
};


console.log(isSymmetric(node1A))

debugger;