<?php
  $connect = new mysqli("localhost", "root", "root", "company");
    // Check connection
    if ($connect->connect_error) {
     die("Connection failed: " . $connect->connect_error);
    }

    $sql = "SELECT * FROM login";
    $result = $connect->query($sql);
    if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc()) {
      echo "<tr><td>" . $row["id"]. "</td><td>" . $row["username"] . "</td><td>"
      . $row["password"]. "</td></tr>";
    }
    echo "</table>";
  } else {
    echo "0 results";
  }
  $connect->close();
?>
