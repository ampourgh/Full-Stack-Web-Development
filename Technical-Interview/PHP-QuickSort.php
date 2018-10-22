<?php
  class quickSort {

      public $arr;

      public function __construct($arr) {
          $this->arr = $arr;
      }

      public function executeQuickSort($low, $high) {

          if($low===null || $high===null){
              return false;
          }

          if($low < $high) {
              $pi = $this->partition($low, $high);
              $this->executeQuickSort($low, $pi - 1);
              $this->executeQuickSort($pi + 1, $high);
          }
      }

      public function partition($low, $high){

          if($low===null || $high===null){
              return false;
          }

          $pivot = $this->arr[$high];

          $index = $low - 1;

          for($incrementingVal = $low; $incrementingVal <= $high-1; $incrementingVal++) {
              if($this->arr[$incrementingVal] <= $pivot) {
                  $index++;
                  $this->swap($index, $incrementingVal);
              }
          }

          $this->swap($index+1,$high);

          return $index + 1;
      }

      public function swap($index, $incrementingVal) {
          $p=$this->arr[$index];
          $q=$this->arr[$incrementingVal];
          $this->arr[$index]=$q;
          $this->arr[$incrementingVal]=$p;
      }

      public function checkBudget($arr, $budget) {
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

  $budget = 50;
  $arr = [1, 12, 5, 111, 200, 1000, 10];

  $obj = new quickSort($arr);
  $obj->executeQuickSort(0, 6);

  print_r($obj->checkBudget($obj->arr, $budget));
  // print_r($obj->arr);
 ?>
