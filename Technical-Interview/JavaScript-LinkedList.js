function LinkedList() {
  // declaring multiple variables in a single line
  let [length, head] = [0, null];

  // set Node name and the link
  let Node = function(element) {

    if (n === undefined) {
      var n = 0;
    } else {
      n = n + 1;
    }

    this.element = element;
    this.index = n;
    this.next = null;
  };

  // truncated function
  this.size = () => length;
  this.head = () => head;
  this.headEle = () => this.head().element;

  this.displayLinks = () => {
    var arrLinkedList = [];
    if (head !== null) {
      arrLinkedList.push('[' + this.head().index + '] ' + this.head().element);

      if(this.head().next !== null) {
        var nextLL = this.head().next;
        arrLinkedList.push('[' + nextLL.index + '] ' + nextLL.element);
        while(nextLL.next !== null) {
          arrLinkedList.push('[' + nextLL.next.index + '] ' + nextLL.next.element);
          nextLL = nextLL.next;
        }
      }
      arrLinkedList = arrLinkedList.join(' -> ');

      return arrLinkedList;
    } else {
      return 'A linked list has not been constructed yet.';
    }
  };

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
numList.add('Three');
numList.add('Two');
numList.add('One');
numList.add('Four');
numList.add('Five');
numList.add('Six');
numList.add('Seven');
numList.add('Eight');
numList.add('Nine');
console.log('Size: ' + numList.size())
console.log('Head element: ' + numList.headEle())
console.log('\n')
var numVal = 'One';
console.log('Index Value of: ' + numVal + ' is ' + numList.indexOf(numVal));
console.log(numList.head().next.next);
console.log('\n')
console.log(numList.displayLinks());
