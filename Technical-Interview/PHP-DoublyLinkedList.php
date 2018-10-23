<?php
  class DoublyLinkedList {

      public $start = null;
      public $end = null;

      public function add(Element $element) {

          if($this->start === null) {
              $this->start = $element;
              $this->end = $element;
              return;
          }

          $this->end->setNext($element);
          $element->setPrevious($this->end);
          $this->end = $element;

      }

      public function getLinkedList() {
        $arrLL = [];

        array_push($arrLL, $this->start->data);

        $nextVal = $this->start->next;

        while($nextVal !== null) {
          array_push($arrLL, $nextVal->data);
          $nextVal = $nextVal->next;
        }

        return $arrLL;

      }

      public function getStart() {
          return $this->start->data;
      }

      public function getEnd() {
          return $this->end;
      }

  }

  class Element {

      public $prev;
      public $next;
      public $data;

      public function __construct($data) {
          $this->data = $data;
      }

      public function setPrevious(Element $element) {
          $this->prev = $element;
      }

      public function setNext(Element $element) {
          $this->next = $element;
      }

      public function setData($data) {
          $this->data = $data;
      }

  }

  $ll = new DoublyLinkedList();
  $ll->add(new Element(4));
  $ll->add(new Element(5));
  $ll->add(new Element(6));
  $ll->add(new Element(7));
  $ll->add(new Element(8));
  $ll->add(new Element(9));
  print_r($ll->getLinkedList());
 ?>
