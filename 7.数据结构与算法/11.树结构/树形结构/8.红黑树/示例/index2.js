(() => {
  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  const g = new Node('g');
  const h = new Node('h');
  const j = new Node('j');

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;
  d.right = h;
  e.right = j;

  // 返回二叉树的层数
  function getDeep(root) {
    if(root === null) {
      return 0;
    }
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
  }

  // 是否是平衡二叉树
  function isBalance(root) {
    if(root === null) {
      return true;
    }
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) > 1) {
      // 不平衡：不符合平衡二叉树的定义
      return false;
    } else {
      return isBalance(root.left) && isBalance(root.right);
    }
  }

  console.log(getDeep(a));
  console.log(isBalance(a));
  
})()