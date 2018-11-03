<?php
  class Arr {
    private $_i = [];

    public function __construct() {
      echo '';
    }

    public function _add(...$key) {
      foreach ($key as &$value) {
        array_push($this->_i, $value);
      }
    }

    public function _remove($comparison) {
      for ($x = 0; $x <= count($this->_i); $x++) {
        if ($comparison == $this->_i[$x]) {
          unset($this->_i[$x]);
        }
      }
    }

    public function _placeBefore($data, $before) {
      $x = 0;

      while($before !== $this->_i[$x]) {
        $x++;
      }

      if($before === $this->_i[$x]) {
        array_splice($this->_i, $x, 0, $data);
      }
    }

    public function _placeAfter($data, $after) {
      $x = 0;

      while($after !== $this->_i[$x]) {
        $x++;
      }

      if($after === $this->_i[$x]) {
        $x++;
        array_splice($this->_i, $x, 0, $data);
      }
    }

    public function _swap($value1, $value2) {
      $x = 0;

      while($value1 !== $this->_i[$x] && $value2 !== $this->_i[$x] && $x !== count($this->_i)) {
        $x++;
        echo $this->_i[$x]  . "\n";
      }

      if($value1 === $this->_i[$x]) {
        $this->_i[$x] = $value2;
      } else {
        $this->_i[$x] = $value1;
      }

      $x++;

      while($value1 !== $this->_i[$x] && $value2 !== $this->_i[$x] && $x !== count($this->_i)) {
        $x++;
      }

      if($value1 === $this->_i[$x]) {
        $this->_i[$x] = $value2;
      } else {
        $this->_i[$x] = $value1;
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

  $Arr->_add(3, 1, 2, 6);
  $Arr->_add(9);

  $Arr->_placeBefore(7, 1);
  $Arr->_placeAfter(8, 1);

  $Arr->_dump();

  $Arr->_swap(7, 8);

  $Arr->_remove(3);
  $Arr->_remove(1);
  echo "\n\n\n";
  echo $Arr->_values();
  echo "\n\n";

  $Arr->_dump();
 ?>
