(() => {
  const arr = [];
  for(let i = 0; i < 10000; i++) {
    arr[i] = Math.floor(Math.random() * 10000);
  }

  let num = 0;

  function search(arr, target) {
    for(let i = 0; i < arr.length; i++) {
      num = num + 1;
      if(arr[i] === target) {
        return true;
      }
    }
    return false;
  }


  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }



  function addNode(root, num) {
    if(root === null) {
      return;
    }
    if(root.value === num) {
      // 树已经存在
      return;
    }
    if(root.value < num) {
      // 目标值比当前节点大
      if(root.right === null) {
        // 如果右侧为空，则创建节点
        root.right = new Node(num);
      } else {
        // 如果右侧不为空，则向右侧进行递归
        addNode(root.right, num);
      }
    } else {
      // 目标值比当前节点小
      if( root.left === null) {
        root.left = new Node(num);
      } else {
        addNode(root.left, num);
      }
    }
  }

  let num2 = 0;
  function buildSearchTree(arr) {
    if((arr === null) && (arr.length === 0)) {
      return null;
    }
    const root = new Node(arr[0]);

    for(let i = 1; i < arr.length; i++) {
      addNode(root, arr[i]);
    }
    return root;
  }
 
  function searchBytree(root, target) {
    if(root === null) {
      return false;
    }
    num2 = num2 + 1;
    if(root.value === target) {
      return true;
    }

    if(root.value > target) {
      return searchBytree(root.left, target);
    } else {
      return searchBytree(root.right, target);
    }
  }

  console.log(search(arr, 1000));
  console.log(num);
  const root = buildSearchTree(arr);
  console.log(searchBytree(root, 1000));
  console.log(num2);
  
})();