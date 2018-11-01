<?php
  class Node {
    private $_i;

    public function __construct($key) {
      $this->_i = $key;
    }

    public function getKey() {
      return $this->_i;
    }
  }

  class Heap {
    private $heap_Array;
    private $_current_Size;

    public function __construct() {
      [$heap_Array, $this->_current_Size] = [[], 0];
    }

    // DICTIONARY INSERTION

    public function insertAt($index, Node $_insertion) {
      $this->heap_Array[$index] = $_insertion;
    }

    // HEAP SORT

    public function heapsort(Heap $Heap, $size) {

      for ($j = (int)($size/2) - 1; $j >= 0; $j--) {
        $Heap->bubbleDown($j);
      }

      for ($j = $size-1; $j >= 0; $j--) {
        $BiggestNode = $Heap->remove();
        $Heap->insertAt($j, $BiggestNode);
      }

      return $Heap->asArray();
    }

    public function remove() {
      [$root, $this->heap_Array[0]] = [$this->heap_Array[0], $this->heap_Array[--$this->_current_Size]];
      $this->bubbleDown(0);
      return $root;
    }

    public function bubbleDown($index) {
      $larger_Child = null;
      $top = $this->heap_Array[$index]; // save root
      while ($index < (int)($this->_current_Size/2)) { // not on bottom row
      $leftChild = 2 * $index + 1;
      $rightChild = $leftChild + 1;

      if ($rightChild < $this->_current_Size
          && $this->heap_Array[$leftChild] < $this->heap_Array[$rightChild]) {
        $larger_Child = $rightChild;
      } else {
        $larger_Child = $leftChild;
      }

      if ($top->getKey() >= $this->heap_Array[$larger_Child]->getKey()) {
        break;
      }

      $this->heap_Array[$index] = $this->heap_Array[$larger_Child];
        $index = $larger_Child; // go down
      }

      $this->heap_Array[$index] = $top; // root to index
    }

    public function asArray() {
      $arr = array();
      for ($j = 0; $j < sizeof($this->heap_Array); $j++) {
        $arr[] = $this->heap_Array[$j]->getKey();
      }

      return $arr;
    }

    // SIZE

    public function increment() {
      $this->_current_Size++;
    }

    public function getSize() {
      return $this->_current_Size;
    }
  }

  $arr = [1, 0, 10, 10, 3, 0, 3, 7];
  echo "Original Array: " . implode(", ", $arr) . "\n";
  $Heap = new Heap();

  foreach ($arr as $key => $val) {
    echo "key: " . $key . ", value: " . $val . "\n";
    $Node = new Node($val);
    $Heap->insertAt($key, $Node);
    $Heap->increment();
  }

  echo "Size: " . $Heap->getSize() . "\n";

  $result = $Heap->heapsort($Heap, $Heap->getSize());
  echo "Sorted Array: " . implode(', ',$result) . "\n";
