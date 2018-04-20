<?php
  if (isset($_GET["temp"])) {
      if ($_GET["temp"] == "001") {
        header('Location: /template/001.php'); 
      } else if ($_GET["temp"] == "002") {
        echo "<p>"."insert code for 002"."</p>";
      } else if ($_GET["temp"] == "003") {
        echo "<p>"."insert code for 003"."</p>";
      }
  }
?>
