/*
 * Given an array of integers, 
 * find and print the maximum number of integers you can select from the array 
 * such that the absolute difference between any two of the chosen integers is < 1.
 */

function thisChallenge($l) {
  $c = array_count_values($l);
  $largest = 0;
  $previousItem = NULL;
  
  foreach ($l as $item) {
    $found = $c[(array_search($item, array_keys($c)) + 1)];
  
    if($previousItem) {
      $found2 = $c[(array_search($previousItem, array_keys($c)) + 1)];
      $sum_found = $c[$found] + $c[$found2];
      if ($sum_found > $largest) {
        $largest = $sum_found; 
      }    
    }
    $previousItem = $item;
  }
  
  print($largest . "\n");
}

thisChallenge(array(4, 6, 5, 3, 3, 1));
thisChallenge(array(1, 2, 2, 3, 1, 2));
