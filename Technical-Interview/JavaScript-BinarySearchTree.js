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


    function checkNode(node) {

      // check left
      if(node.left !== null) {
        treeArr.push('[left] ' + node.left.value);
        // repeat function from left node's children
        checkNode(node.left);
      }

      // check right
      if(node.right !== null) {
        treeArr.push('[right] ' + node.right.value);
        checkNode(node.right);
      }
    }

    console.log(treeArr);
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
/*
   [ 
     '[root] 3', '[left] 2', '[left] 1', '[left] 0', '[right] 4', '[right] 5',
     '[right] 17', '[left] 9'
   ]
*/
