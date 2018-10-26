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



$a = '1';
$b = &$a;

echo $b . "\n";
//>>> 1

$b = "2$b";

echo $b;
//>>> 21



var_dump(0123 == 123); // bool(false) -- OCTAL instead of DECI
var_dump('0123' == 123); // bool(true) -- COERCED into INT
var_dump('0123' === 123); // bool(false) -- STRICT comparison



$x = 3 + "15%" + "$25";
// 3 + 15 + 0
// starting character decides value
echo $x;
//>>> 18




 ?>
