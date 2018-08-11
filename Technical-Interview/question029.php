/*
 * Technical interview question converted from Python to PHP:
 * Take in a string and pick out the unique alphanumeric characters,
 * return the original sring, the new string and its length 
 */

function writeMsg($str) {
  $originalStr = $str;
  $str = preg_replace("/[^a-zA-Z0-9]+/", "", $str);
  $str = implode("",array_unique(str_split($str)));
  print $originalStr . " - " . $str . " - " . strlen($str) . "\n";
}

writeMsg("Hello World!"); 
writeMsg("Translating a technical question from Python to PHP."); 
