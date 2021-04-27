const lowestCommonAncestor = (root, p, q) => {
  if (root === null) return null;
  if (root === q || root === p) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }
  if (left === null) {
    return right;
  }
  return left;
};
