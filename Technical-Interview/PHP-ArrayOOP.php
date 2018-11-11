<?php
/*
Actions:
_add(...$key)
_remove($comparison)
_remove_key($key)
_break_characters(...$arguments)
_place_before($data, $before)
_place_after($data, $after)
_swap($value1, $value2)
_values()
_sentence()
_dump()
_alphabatize()
_shuffle()
*/

class Arr {
  public $_i = [];
  public static $unique_id = 1;

  // when a new class is called, all the parameters are inserted into the array
  public function __construct(...$key) {

    echo 'New array has been created.';
    Arr::$unique_id++;

    foreach ($key as &$value) {
      if (strpos($value, ' ') !== false) {

        $pieces = $this->_delete_mark($value);

        foreach ($pieces as $val) {
          array_push($this->_i, $val);
        }

      } else {
        array_push($this->_i, $value);
      }
    }
  }

  // function called by _break_characters()
  public function _delete_mark($value) {
    if (strpos($value, '.') !== true) {
      $value = trim($value, '.');
    } elseif (strpos($value, '!') !== true) {
      $value = trim($value, '!');
    }

    $pieces = explode(" ", $value);

    return $pieces;
  }

  // alternative method to _values() is to just call the Class alone
  public function __toString() {
    $stringify = '';
    foreach ($this->_i as $key => $val) {
      $stringify .= "[" . $key . "] = " . $val . "\n";
    }
    return $stringify;
  }

  // function shared between _place_before() and _place_after()
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

  // _swap() calls swapping function twice for each value being changed
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

  // account for the time, if beginning of function, then put 0
  // if the end of function, insert time to get time function took
  public function _time ($time) {
    if($time == 0) {
      return microtime(TRUE);
    } else {
      echo "\n" . (microtime(TRUE)-$time). ' seconds';
    }
  }

  public function _execute_quicksort($low, $high) {

      if($low===null || $high===null){
          return false;
      }

      if($low < $high) {
          $pi = $this->_quicksort_partition($low, $high);
          $this->_execute_quicksort($low, $pi - 1);
          $this->_execute_quicksort($pi + 1, $high);
      }
  }

  public function _quicksort_partition($low, $high) {

      if($low===null || $high===null){
          return false;
      }

      $pivot = $this->arr[$high];

      $index = $low - 1;

      for($incrementingVal = $low; $incrementingVal <= $high-1; $incrementingVal++) {
          if($this->arr[$incrementingVal] <= $pivot) {
              $index++;
              $this->_quicksort_swap($index, $incrementingVal);
          }
      }

      $this->_quicksort_swap($index+1,$high);

      return $index + 1;
  }

  public function _quicksort_swap($index, $incrementingVal) {
      $p=$this->arr[$index];
      $q=$this->arr[$incrementingVal];
      $this->arr[$index]=$q;
      $this->arr[$incrementingVal]=$p;
  }

  public function _quicksort_check_budget($arr, $budget) {
      $newArr = [];
      for($i = 0; $i <= count($arr); $i++) {
          if($budget - $arr[$i] >= 0) {
            $budget = $budget - $arr[$i];
            array_push($newArr, $arr[$i]);
          } else {
            return $newArr;
          }
      }
  }
}

class Action extends Arr {

  // add a value into the array
  public function _add(...$key) {
    foreach ($key as &$value) {
      array_push($this->_i, $value);
    }
  }

  // remove a value in an array
  public function _remove($comparison) {
    $startTime = $this->_time(0);

    foreach ($this->_i as $key => $val) {
      if ($comparison == $val) {
        unset($this->_i[$key]);
      }
    }
    $this->_time($startTime);
  }

  // remove value base on key in an array
  public function _remove_key($key) {
    unset($this->_i[$key]);
  }

  // break a string down based on the value in the third arg
  // if the third arg is left blank, then assume a space
  public function _break_characters(...$arguments) {

    [$arrayName, $sentence] = [$arguments[0], $arguments[1]];

    if(isset($arguments[2])) {
      $targetValue = $arguments[2];
    } else {
      $targetValue = " ";
    }

    if (strpos($sentence, $targetValue) !== false) {

      $pieces = $this->_delete_mark($sentence);

      foreach ($pieces as $val) {
        array_push($this->_i, $val);
      }
    }

  }

  // place a value before a value in the array
  public function _place_before($data, $before) {
    $placement = 'before';
    $this->_place($data, $before, $placement);
  }

  // place a value after a value in the array
  public function _place_after($data, $after) {
    $placement = 'after';
    $this->_place($data, $after, $placement);
  }

  // swap two existing values in the array
  public function _swap($value1, $value2) {
    $x = 0;
    $x = $this->swapping($x, $value1, $value2);
    $x++;
    $this->swapping($x, $value1, $value2);
  }

  // showcase a [key] = value pair
  public function _values() {
    foreach ($this->_i as $key => $val) {
      echo "[" . $key . "] = " . $val . "\n";
    }
  }

  // echo the array as a sentence
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

  // array dump
  public function _dump() {
    var_dump($this->_i);
  }

  // sort the array
  public function _alphabatize() {
    sort($this->_i);
  }

  // shuffle the array
  public function _shuffle() {
    shuffle($this->_i);
  }
}

class Misc {

  // single space
  public function _space() {
    echo "\n";
  }

  // double space
  public function _double_space() {
    echo "\n\n";
  }
}

$Arr = new Action();
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
$Arr->_execute_quicksort(0, 6);

$Misc->_double_space();
$Arr->_sentence();

$Misc->_double_space();
$Arr2 = new Action('This', 'is', 'the', 'second', 'array');
$Misc->_double_space();
$Arr2->_sentence();

$Misc->_double_space();

$Arr3 = new Action();
$Arr3->_break_characters($Arr3, 'This is a third sentence.', ' ');

$Misc->_double_space();
$Arr3->_sentence();
$Misc->_double_space();
$Arr3->_break_characters($Arr3, 'send this over please', ' ');

$Arr3->_sentence();
$Misc->_double_space();
echo $Arr3->_values();

echo $Arr3;

echo "\n# of Values: " . Arr::$unique_id;
 ?>
