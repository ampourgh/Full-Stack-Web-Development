<?php
$recordsOriginal = [
                    ['emerson', '1'],
                    ['francis', '2'],
                    ['jacob', '3'],
                    ['emerson', '1'],
                    ['jacob', '3'],
                    ['francis', '2'],
                    ['emerson', '1'],
                    ['craig', '1']
                  ];

$files = [
          'emerson.jpg',
          'max.pdf',
          'clara.html',
          'francis.txt',
          'vivian.png',
          'jacob.docx'
         ];

$func = function($value) {
   return $value[0];
};

$records = array_unique(array_map($func, $recordsOriginal));

$func = function($value) {
   return pathinfo($value, PATHINFO_FILENAME);
};

$files_arr = array_map($func, $files);

print_r($files_arr);

$archival = $removalArr = [];

for ($x = 0; $x < count($files_arr); $x++) {

  for ($r = 0; $r < count($records); $r++) {

    echo "\n". $files_arr[$x] . " x " . $records[$r];

    if($files_arr[$x] == $records[$r]) {
      array_push($archival, $record);
      $r = count($records);
      $archival = [];
    }
  }

  if (empty($archival)) {
    array_push($removalArr, $record);
  }
  $archival = [];

}

echo "\n\n\n";

print_r($removalArr);

foreach($removalArr as $scrubFile) {
  foreach (glob('../../documents/' . $scrubFile . '.*') as $file) {
    unlink($file);
  }
}

?>
