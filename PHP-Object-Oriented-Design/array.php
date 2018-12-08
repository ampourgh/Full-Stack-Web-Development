<?php
/*
Actions:
_arr()
_combine()
_flip()
_add(...$key)
_remove($comparison)
_remove_key($key)
_JSON()
_break_characters(...$arguments)
_place_before($data, $before)
_place_after($data, $after)
_swap($value1, $value2)
_values()
_sentence()
_dump()
_shuffle()
_sort()
_quicksort($low, $high)

TempArr (extends Actions)
__Deconstuct()
*/

class Arr {
  public $_i = [];
  public static $unique_id = 0;

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

  public function _quicksort_partition($low, $high) {

    if($low===null || $high===null){
      return false;
    }

    $pivot = $this->_i[$high];

    $index = $low - 1;

    for($incrementingVal = $low; $incrementingVal <= $high-1; $incrementingVal++) {
      if($this->_i[$incrementingVal] <= $pivot) {
        $index++;
        $this->_quicksort_swap($index, $incrementingVal);
      }
    }

    $this->_quicksort_swap($index+1,$high);

    return $index + 1;
  }

  public function _quicksort_swap($index, $incrementingVal) {
    $p=$this->_i[$index];
    $q=$this->_i[$incrementingVal];
    $this->_i[$index]=$q;
    $this->_i[$incrementingVal]=$p;
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

  public function _array() {

    $arr = [];

    foreach ($this->_i as $key => $val) {
      $arr[$key] = $val;
    }

    return $arr;

  }

  public function _capitalize() {

    $capitalArr = array_map(function($capit) {
        return strtoupper($capit);
        //return ucwords($capit);
    }, $this->_i);

    print_r($capitalArr);
  }

  public function _combine($arr1, $arr2) {

    // array_push($this->_i, array_combine($arr1, $arr2));

    if(is_array($arr1)) {
      for ($x = 0; $x < count($arr1); $x++) {

        $this->_i[$arr1[$x]] = $arr2[$x];

      }
    } else {
      $this->_i[$arr1] = $arr2;
    }

  }

  public function _flip() {
    array_flip($this->_i);
  }

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

  // JSON encoding and parse through
  public function _JSON() {

    $data = json_encode($this->_i);
    echo $data . "\n\n";

    $myArray = explode('"', $data);

    for ($x = 1; $x <= sizeof($myArray) - 2; $x++) {

      if ($x % 4 != 0 ) {
        echo "\n" . $myArray[$x];
        $x++;
        $x++;
        echo ' -> '. $myArray[$x];
      }

    }
  }

  public function _show_certain($comparison, $indexu, $numberOfVals) {
    $tentArr = [];
    foreach ($this->_i as $key => $val) {
      if ($comparison == substr($val, $indexu, $numberOfVals)) {
        echo "[" . $key . "] = " . $val . "\n";
        array_push($tentArr, $val);
      }
    }
    return $tentArr;
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

  // shuffle the array
  public function _shuffle() {

    $startTime = $this->_time(0);
    shuffle($this->_i);
    echo "\nShuffle: ";
    $this->_time($startTime);

  }

  // sort the array
  public function _sort() {

    $startTime = $this->_time(0);
    shuffle($this->_i);
    sort($this->_i);
    $this->_time($startTime);

  }

  // quicksort the array
  public function _quicksort($low, $high) {

    if($low===null || $high===null){
      return false;
    }

    if($low < $high) {
      $pi = $this->_quicksort_partition($low, $high);
      $this->_quicksort($low, $pi - 1);
      $this->_quicksort($pi + 1, $high);
    }

  }
}

class TempArr extends Action {
  public function __construct(...$key) {

    echo 'New temporary array has been created.';
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

  public function __destruct() {
      echo 'The array "', __CLASS__, '" was destroyed.<br />';
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

$ArrKeys = new Action('sky', 'grass', 'hills');
$ArrValues = new Action('blue', 'green', 'purple');
$Arr = new Action();

$Misc = new Misc();
$Misc->_double_space();

$Arr->_combine($ArrKeys->_array(), $ArrValues->_array());
$Arr->_combine('desktop', 'turquois');
$Arr->_combine('terminal', 'black');
print_r($Arr->_array());
$Misc->_double_space();
$Arr->_values();
$Misc->_double_space();
$Arr->_flip();
print_r($Arr->_array());
$Arr->_capitalize();
$Arr->_JSON();

$Misc->_double_space();
$tempArr = new TempArr();
$tempArr->_combine($ArrKeys->_array(), $ArrValues->_array());
print_r($tempArr->_array());
$tempArr->__destruct();

/*
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

$Arr->_sort();

$Misc->_space();
echo $Arr->_values();
$Misc->_space();
$Arr->_sentence();

// $startTime = $Arr->_time(0);
// $Arr->_quicksort(0, 3);
// echo "\nQuicksort: ";
// $Arr->_time($startTime);
$Arr->_sort();

$Misc->_double_space();
$Arr->_sentence();
$Misc->_double_space();

$showCertain = $Arr->_show_certain('sa', 0, 2);
var_dump($showCertain);
echo $showCertain[0];

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

echo "\n";
$rest = substr("abcdef", 0, 1);
echo $rest;
*/
?>
