<?php

$x = 5;
echo $x; // 5
echo "<br />";
echo $x+++$x++; // 11
echo "<br />";
echo $x; // 7
echo "<br />";
echo $x---$x--; // 5
echo "<br />";
echo $x;


$str1 = 'powerful';
$str2 = 'pow';
if (strpos($str1,$str2)) { // RETURNS FALSE
// if (strpos($str1,$str2) !== false) { // RETURNS TRUE
    echo "\"" . $str1 . "\" contains \"" . $str2 . "\"";
} else {
    echo "\"" . $str1 . "\" does not contain \"" . $str2 . "\"";
}


$x = true;            // sets $x equal to true
$x = true and false;  // results in false, but has no affect on anything
var_dump($x);

$pseudonym = 'Fake';
$pseudonym[5] = 'RRR';
// >>> Fake R
strlen($pseudonym);
// >>> 6

 ?>
