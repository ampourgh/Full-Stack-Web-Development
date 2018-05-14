<?php
  session_start();
?>

<!DOCTYPE html>
<html>
<head>
  <title>Control Panel</title>
  <?php include './css/css.html'; ?>
</head>
<body>
  <div class="container">
    <?php include './navbar.php' ?>
    <div id="control-panel-body">
      <?php
        include db.php;
        $selectAll = "SELECT * FROM `promotion` WHERE 1";
        $result = $mysqli->query($selectAll);
        if ($result->num_rows > 0) {
           while($row = $result->fetch_assoc()) {
              echo "<img src='".$row["image"]."'>";
          }
        }
      ?>
    </div>
  </div>
</body>
</html>
