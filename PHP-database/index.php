<!DOCTYPE html>
<html>
<head>
 <title>Table with database</title>
 <style>
  table {
   border-collapse: collapse;
   width: 100%;
   color: #588c7e;
   font-family: monospace;
   font-size: 25px;
   text-align: left;
     }
  th {
   background-color: #588c7e;
   color: white;
    }
  tr:nth-child(even) {background-color: #f2f2f2}
 </style>
</head>
<body>
 <table>
 <tr>
  <th>Id</th>
  <th>Username</th>
  <th>Password</th>
 </tr>
  <?php
  $connect = new mysqli("localhost", "root", "root", "company");
    // Check connection
    if ($connect->connect_error) {
     die("Connection failed: " . $connect->connect_error);
    }
    
   /*
      $sql = "INSERT INTO login (username, password)
              VALUES ('Jojo', '1234'),
                     ('Amelia', '2222')";

     if (mysqli_query($connect, $sql)) {
         echo "New record created successfully";
     } else {
         echo "Error: " . $sql . "<br>" . mysqli_error($conn);
     }
   */

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
</table>
</body>
</html>
