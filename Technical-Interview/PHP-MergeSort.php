<?php

function merge_sort($arrP) {

  if(count($arrP) == 1 ) return $arrP;

  $mid = count($arrP) / 2;

  // array slice: start at zero, and lenght is until mid
  $left = merge_sort(array_slice($arrP, 0, $mid));

  // array slice: start from the midpoint:end
  $right = merge_sort(array_slice($arrP, $mid));


	return merge($left, $right);

}

function merge($left, $right) {

	$result = [];

  while (count($left) > 0 && count($right) > 0) {
		if($left[0] > $right[0]) {
			[$result[], $right] = [$right[0], array_slice($right , 1)];
		}else{
			[$result[], $left] = [$left[0], array_slice($left, 1)];
		}
	}

	while (count($left) > 0) {
		[$result[], $left] = [$left[0], array_slice($left, 1)];
	}

	while (count($right) > 0) {
		[$result[], $right] = [$right[0], array_slice($right, 1)];
	}

	return $result;

}

$arr = [100, 71, 63, 8, 0, 54, 7, 2, 5, 4, 1];

echo "Original Array: " . implode(', ',$arr );

echo "\nSorted Array: " . implode(', ',merge_sort($arr));

 ?>
