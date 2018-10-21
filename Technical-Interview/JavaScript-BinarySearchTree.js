class BinarySearchTree {

  constructor(){
    this.root = null;
  }

  // add a node to the tree
  add(value){
    let addNode = { value, left: null, right: null};

    // set the root if we don't have one
    if(this.root === null){
      this.root = addNode;
      return;
    }

    let current = this.root;

    while(true){
      // check for right
      if(value > current.value){
        // add right
        if(!current.right){ current.right = addNode; break; }

        current = current.right;

      // check for left
      } else if(value < current.value){
        // add left
        if(!current.left){ current.left = addNode; break; }

        current = current.left;
      } else {
        // if it's the same ignore
        break;
      }
    }
  }

  // search for a specilfic value
  contains(value){
    let current = this.root;

    while(current){
      if(current.value == value){
        return true;
      } else if (current.value > value){
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // showcase all the values in the tree
  showcase() {
    // set array where items are stored
    var treeArr = [];

    // insert root
    treeArr.push('[root] ' + this.root.value);

    // start function
    checkNode(this.root);

    console.log('Aggregating from BST...');

    // sleep function with timeout promise
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    // async function that references the sleep function
    async function checkNode(node) {

      // check left
      if(node.left !== null) {
        await sleep(2);
        treeArr.push('[left] ' + node.left.value);
        // repeat function from left node's children
        checkNode(node.left);
      }

      // check right
      if(node.right !== null) {
        await sleep(1);
        treeArr.push('[right] ' + node.right.value);
        checkNode(node.right);
      }
    }

    // log the array of BST branches after the main async function completes
    async function consoleLog() {
      await sleep(10);
      console.log(treeArr);
    }

    consoleLog()
  }
}

class DepthFirstSearch extends BinarySearchTree {
  // pre-order -> root, left, right
  // in-order -> left, root, right
  // post-order -> left, right, root
  consstructor(){
    this.traverseMethod = 'pre-order';
  }

  setTraverseMethod(traverseMethod){

    if(traverseMethod == 'pre-order' || traverseMethod == 'in-order' || traverseMethod == 'post-order'){

      this.traverseMethod = traverseMethod;

    } else {

      console.error('Not a valid search method, must be "pre-order", "in-order" or "post-order"');

    }

  }

  getTraverseMethod(){
    return this.traverseMethod;
  }

  traverse(){
    switch(this.traverseMethod){
      case 'pre-order':
        this.preOrderTraverse(value);
        break;
      case 'in-order':
        this.inOrderTraverse(value);
        break;
      case 'post-order':
        this.postOrderTraverse(value);
        break;
      default:
        console.error('invalid traverse method');
    }
  }

  preOrderTraverse(value){


  }

  inOrderTraverse(value){

  }

  postOrderTraverse(value){

  }
}

class BreadthFirstTraverser extends BinarySearchTree {
  traverse(value){

  }
}

var numList = new BinarySearchTree();
numList.add(3);
numList.add(2);
numList.add(1)
numList.add(4);
numList.add(5);
numList.add(17);
numList.add(9);
numList.add(0);

numList.showcase();

var dfs = new DepthFirstSearch();
dfs.traverse();
