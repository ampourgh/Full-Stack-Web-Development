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
        $mysqli = new mysqli("localhost", "root", "root", "accounts");

        $sql = "SELECT * FROM dropdown";
        $result = $mysqli->query($sql);
        echo "<h2>Select from Promotion Templates</h2>";
        if ($result->num_rows > 0) {
          while($row = $result->fetch_assoc()) {
            echo "<a href='./template.php?temp=".$row['id']."'>".$row['description']."</a>";
          }
        }
      ?>
    </div>
  </div>
</body>
</html>
