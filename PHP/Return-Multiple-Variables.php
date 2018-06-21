function num_arr() {
  $x = 0;
  $y = 1;
  $z = 2;
  $a = 3;

  function cubed($c) {
    $c = $c ** 3;
    return ($c);
  }

  cubed($x);
  cubed($y);
  cubed($z);
  cubed($a);

  return array ($x, $y, $z, $a);
}

list ($zero, $one, $two, $three) = num_arr();

echo $zero . ": ZERO \n" 
    . $one . ": ONE \n" 
    . $two . ": TWO \n"
    . $three . ": THREE \n";
