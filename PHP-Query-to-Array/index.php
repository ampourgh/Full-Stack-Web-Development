// ./queryPage.php
<?php
  include './navbar/changes.php';
  
  // checks if query exists, which it will if previously loaded page and no changes have been made
  if (isset($query) == False) {
  
     $query_pt_1 = "SELECT * FROM DB";
     $query_set = sqlsrv_query($conn, $query_pt_1);
     
     // create and reset arrays
  
     $username_arr = array();
     $first_name_arr = array();
     $last_name_arr = array();
     $age_arr = array();
     $desc_arr = array();
     $email_arr = array();
     
     count = 0;
     
     // loop through each row, put column value into the array 
     
     while($row = sql_fetch_array($query_set)) {
      
      $count++;
      if ($row['Username'] != NULL) {
        array_push($username_arr, $row['Username']);
      } else {
        array_push($username_arr, ' ');
      }
      if ($row['Username'] != NULL) {
        array_push($first_name_arr, $row['Email']);
      } else {
        array_push($first_name_arr, ' ');
      }
      if ($row['Username'] != NULL) {
        array_push($last_name_arr, $row['LastName']);
      } else {
        array_push($last_name_arr, ' ');
      }
      if ($row['Username'] != NULL) {
        array_push($age_arr, row['Age']);
      } else {
        array_push($age_arr, ' ');
      }
      if ($row['Username'] != NULL) {
        array_push($desc_arr, $row['Desc']);
      } else {
        array_push($desc_arr, ' ');
      }
      if ($row['Username'] != NULL) {
        array_push($email_arr, $row['Email']);
      } else {
        array_push($email_arr, ' ');
      }
    }   
  } 
  
  for ($i = 0; $i < $count; $i++) {
    echo $username_arr[$i] . $first_name_arr[$i] . $last_name_arr[$i]
         . $age_arr[$i] . $desc_arr[$i] . $email_arr[$i];
  } 
?>

// ./changes.php
<?php
  if (isset($edit) || isset($add) || isset($delete)) {
    // destroy variable to allow for a new query to fill the array
    unset($query_pt_1);
    
    // code for changes
  }
?>
