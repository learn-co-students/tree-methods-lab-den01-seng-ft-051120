function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  };
  console.log(currentNode.data);
  if (currentNode.right) {
    inOrder(currentNode.right);
  };
};

function findOrAdd(root, newNode) {
  let currentNode = root;
  if (currentNode.data === newNode.data) {
    return true
  } else if (currentNode.data < newNode.data) {
    if (!currentNode.right) {
      return currentNode.right = newNode
    }
    currentNode = currentNode.right
    return findOrAdd(currentNode, newNode)
  } else if (currentNode.data > newNode.data) {
    if (!currentNode.left) {
      return currentNode.left = newNode
    }
    currentNode = currentNode.left
    return findOrAdd(currentNode, newNode)
  }
}

