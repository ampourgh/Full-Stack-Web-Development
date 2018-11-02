<?php
  class Arr {
    private $_i = [];

    public function __construct() {
      echo '';
    }

    public function _add($key) {
      array_push($this->_i, $key);
    }

    public function _remove($comparison) {
      for ($x = 0; $x <= count($this->_i); $x++) {
        if ($comparison == $this->_i[$x]) {
          unset($this->_i[$x]);
        }
      }
    }

    public function _place($x) {
      public function _between($y, $z) {
        echo 11111;
      }
    }

    public function _values() {
      foreach ($this->_i as &$value) {
        echo $value;
      }
    }

    public function _dump() {
      var_dump($this->_i);
    }

    public function getKey() {
      return $this->_i;
    }
  }

  $Arr = new Arr();
  $Arr->_add(3);
  $Arr->_add(1);
  $Arr->_add(2);
  $Arr->_place(4)->_between(2, 3);
  $Arr->_dump();
  $Arr->_remove(3);
  $Arr->_remove(1);
  echo "\n";
  echo $Arr->_values();
  echo "\n\n";
  $Arr->_dump();
 ?>
