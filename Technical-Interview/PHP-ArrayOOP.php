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
    foreach ($this->_i as $key => $val) {
      if ($comparison == $val) {
        unset($this->_i[$key]);
      }
    }
  }

  public function _place($data, $ab, $placement) {
    $x = 0;

    while($ab !== $this->_i[$x]) {
      $x++;
    }

    if($ab === $this->_i[$x]) {
      if($placement === 'after') {
        $x++;
      }
      array_splice($this->_i, $x, 0, $data);
    }
  }

  public function _placeBefore($data, $before) {
    $placement = 'before';
    $this->_place($data, $before, $placement);
  }

  public function _placeAfter($data, $after) {
    $placement = 'after';
    $this->_place($data, $after, $placement);
  }

  public function swapping($x, $value1, $value2) {
    while($value1 !== $this->_i[$x] && $value2 !== $this->_i[$x] && $x !== count($this->_i)) {
      $x++;
    }

    if($value1 === $this->_i[$x]) {
      $this->_i[$x] = $value2;
    } else {
      $this->_i[$x] = $value1;
    }

    return $x;
  }

  public function _swap($value1, $value2) {
    $x = 0;
    $x = $this->swapping($x, $value1, $value2);
    $x++;
    $this->swapping($x, $value1, $value2);
  }

  public function _values() {
    foreach ($this->_i as $key => $val) {
      echo "[" . $key . "] = " . $val . "\n";
    }
  }

  public function _dump() {
    var_dump($this->_i);
  }

  public function getKey() {
    return $this->_i;
  }

  public function _alphabatize() {
    sort($this->_i);
  }
}

$Arr = new Arr();

$Arr->_add('hello', 'hi', 'hai', 'hey');
$Arr->_add('yo');

$Arr->_placeBefore('greetings', 'hi');
$Arr->_placeAfter('salutations', 'hi');

echo "\n";
echo $Arr->_values();
echo "\n";

$Arr->_swap('greetings', 'salutations');

$Arr->_remove('hello');
$Arr->_remove('hi');
$Arr->_remove('greetings');

$Arr->_alphabatize();

echo "\n";
echo $Arr->_values();
echo "\n";
 ?>
