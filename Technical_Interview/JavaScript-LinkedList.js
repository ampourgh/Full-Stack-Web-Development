function LinkedList() { 
  // declaring multiple variables in a single line
  let [length, head] = [0, null];

  // set Node name and the link
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  // truncated function
  this.size = () => length;
  this.head = () => head;

  // create node 
  this.add = (element) => {

    let node = new Node(element);

    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        // while currentNode.next !== Null
        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        // the null value is now the new node
        currentNode.next = node;
    }

    length++;
  };

  this.indexOf = (element) => {
    let currentNode = head;
    let index = -1;

    while(currentNode){
        index++;
        if(currentNode.element === element){
            return index;
        }
        currentNode = currentNode.next;
    }

    return -1;
  };

}

var numList = new LinkedList();
numList.add('One');
numList.add('Two');
numList.add('Three');
numList.add('Four');
numList.add('Five');
numList.add('Six');
numList.add('Seven');
numList.add('Eight');
numList.add('Nine');
console.log(numList.size())
console.log(numList.head())
console.log(numList.indexOf('One'));
