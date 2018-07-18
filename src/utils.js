const dfs = (rootNode, nodeMap, operator) => {
  const fn = node => {
    operator(node)
    const sub = node.__sub
    if (sub && sub.length === 0) {
      return
    }
    for (let i = 0; i < sub.length; i++) {
      fn(nodeMap[sub[i]])
    }
  }
  fn(rootNode)
}

export { dfs }
