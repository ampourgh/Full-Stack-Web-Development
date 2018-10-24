<?php
  class SinglyLinkedListNode {
      public $data;
      public $next;

      public function __construct($node_data) {
          $this->data = $node_data;
          $this->next = null;
      }
  }

  class SinglyLinkedList {
      public $head;
      public $tail;

      public function __construct()
      {
          $this->head = null;
          $this->tail = null;
      }

      public function insertNode($node_data) {
          $node = new SinglyLinkedListNode($node_data);

          if (is_null($this->head)) {
              $this->head = $node;
          } else {
              $this->tail->next = $node;
          }

          $this->tail = $node;
      }

      public function deleteNode($node_data) {
        $checkNode = $this->head;

        while($checkNode->data !== $node_data) {
          if($checkNode->next !== null) {
            $checkNode = $checkNode->next;
          } else {
            return "Node does not exist";
          }
        }

        if($checkNode->data === $node_data) {

          $replacement = $checkNode->next;
          while($replacement !== null) {
            $checkNode->data = $replacement->data;
            $checkNode = $checkNode->next;
            $replacement = $replacement->next;
          }
          if ($replacement === null) {
            $checkNode->data = null;
          }

        }

      }

  }

  $sll = new SinglyLinkedList();
  $sll->insertNode(1);
  $sll->insertNode(2);
  $sll->insertNode(3);
  $sll->insertNode(4);
  print_r($sll->deleteNode(1));
  $sll->insertNode(5);
  print_r($sll);
 ?>
