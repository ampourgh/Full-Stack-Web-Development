<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$connect = new mysqli("localhost", "root", "root", "company");

// Check connection
if ($connect->connect_error) {
 die("Connection failed: " . $connect->connect_error);
}

// Escape user inputs for security
$username = mysqli_real_escape_string($connect, $_REQUEST['username']);
$password = mysqli_real_escape_string($connect, $_REQUEST['password']);

// attempt insert query execution
$sql = "INSERT INTO login (username, password)
        VALUES ('$username', '$password')";

if(mysqli_query($connect, $sql)){
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// close connection
$connect->close();

// MANUALLY INSERT/DELETE
//
// $connect = new mysqli("localhost", "root", "root", "company");
//
// // Check connection
// if ($connect->connect_error) {
//  die("Connection failed: " . $connect->connect_error);
// }
//
// $sql = "INSERT INTO login (username, password)
//         VALUES ('Dahlia', '1010'),
//                ('Dijkstra', '6721')";
//
// if (mysqli_query($connect, $sql)) {
//    echo "New record created successfully";
// } else {
//    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
// }
//
// $connect->close();
?>

<br>

<a href = "./index.php">return to previous page</a>
