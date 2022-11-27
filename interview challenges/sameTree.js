function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

node3A = new TreeNode(3, null, null)
node2A = new TreeNode(2, null, null)
node1A = new TreeNode(1, node2A, node3A)

node3B = new TreeNode(3, null, null)
node2B = new TreeNode(2, null, null)
node1B = new TreeNode(1, node2B, node3B)

console.log(node1A);
console.log(node1B);

var isSameTree = function(p, q) {

  if(JSON.stringify(p) === JSON.stringify(q)) {
    return true;
  }
  return false;

};

console.log(isSameTree(node1A, node1B));