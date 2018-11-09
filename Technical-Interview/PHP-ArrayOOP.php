<?php
class Arr {
  private $_i = [];

  public function __construct(...$key) {

    echo 'New array has been created.';

    foreach ($key as &$value) {
      if (strpos($value, ' ') !== false) {

        $value = $this->_delete_mark($value);

        $pieces = explode(" ", $value);
        foreach ($pieces as $val) {
          array_push($this->_i, $val);
        }

      } else {
        array_push($this->_i, $value);
      }
    }
  }

  public function _delete_mark($value) {
    if (strpos($value, '.') !== true) {
      $value = trim($value, '.');
    } elseif (strpos($value, '!') !== true) {
      $value = trim($value, '!');
    }
    return $value;
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

  public function _break_characters(...$arguments) {

    [$arrayName, $sentence] = [$arguments[0], $arguments[1]];

    if(isset($arguments[2])) {
      $targetValue = $arguments[2];
    } else {
      $targetValue = " ";
    }

    $sentence = $this->_delete_mark($sentence);

    if (strpos($sentence, $targetValue) !== false) {
      $pieces = explode($targetValue, $sentence);
      foreach ($pieces as $val) {
        array_push($this->_i, $val);
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

  public function _place_before($data, $before) {
    $placement = 'before';
    $this->_place($data, $before, $placement);
  }

  public function _place_after($data, $after) {
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

  public function _sentence() {
    for ($i = 0; $i < count($this->_i); $i++) {

      if ($i === 0) {
        echo ucwords($this->_i[$i]);
      } else {
        echo $this->_i[$i];
      }

      if(isset($this->_i[$i + 1])) {
        echo " ";
      } else {
        echo ".";
      }

    }
  }

  public function _dump() {
    var_dump($this->_i);
  }

  public function __toString() {
    $stringify = '';
    foreach ($this->_i as $key => $val) {
      $stringify .= "[" . $key . "] = " . $val . "\n";
    }
    return $stringify;
  }

  public function getKey() {
    return $this->_i;
  }

  public function _alphabatize() {
    sort($this->_i);
  }

  public function _shuffle() {
    shuffle($this->_i);
  }

  public function __set($arguments, $value) {
    if ($arguments == "this") {
        echo "been here @line(" . __LINE__ . ") Bar::__set('$name', '$value') <br/>";
        $result = $this->property2 = $value;
        return $result;
    }
    return;
  }
}

class Misc {
  public function _space() {
    echo "\n";
  }

  public function _double_space() {
    echo "\n\n";
  }
}

$Arr = new Arr();
$Misc = new Misc();

$Arr->_add('hello', 'hi', 'hai', 'hey');
$Arr->_add('yo');

$Arr->_place_before('greetings', 'hi');
$Arr->_place_after('salutations', 'hi');

$Misc->_space();
echo $Arr->_values();
$Misc->_space();

$Arr->_swap('greetings', 'salutations');

$Arr->_remove('hello');
$Arr->_remove('hi');
$Arr->_remove('greetings');

$Arr->_alphabatize();

$Misc->_space();
echo $Arr->_values();
$Misc->_space();
$Arr->_sentence();
echo $Arr->_shuffle();
$Misc->_double_space();
$Arr->_sentence();

$Misc->_double_space();
$Arr2 = new Arr('This', 'is', 'the', 'second', 'array');
$Misc->_double_space();
$Arr2->_sentence();

$Misc->_double_space();

$Arr3 = new Arr();
$Arr3->_break_characters($Arr3, 'This is a third sentence.', ' ');

$Misc->_double_space();
$Arr3->_sentence();
$Misc->_double_space();
$Arr3->_break_characters($Arr3, 'send this over please', ' ');

$Arr3->_sentence();
$Misc->_double_space();
echo $Arr3->_values();

echo $Arr3;
 ?>
