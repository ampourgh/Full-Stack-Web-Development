<?php
  $username = $_SESSION['username'];
  $company = $_SESSION['company'];
  $email = $_SESSION['email'];
?>

<div class="options-box">
  <a href="logout.php"><button class="button button-block" name="logout"/>Log Out</button></a>

  <a href="controlpanel.php"><button class="button button-block username" /><?php echo $username.' '.$company; ?></button></a>
  <a href="add_promo.php"><button class="button button-block" name="logout"/>Add Promotion</button></a>
  <p><?= $email ?></p>
  <?php
    $mysqli = new mysqli("localhost", "root", "root", "accounts");

    $sql = "SELECT * FROM dropdown";
    $result = $mysqli->query($sql);
    echo "<select id='gotolink'>";
    echo "<option>Select from Promotion Templates</option>";
    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        echo "<option value='./template.php?temp=".$row['id']."'>".$row['description']."</option>";
      }
    }
    echo "</select>";
  ?>
  <script>
    document.getElementById("gotolink").onchange = function() {
        if (this.selectedIndex!==0) {
            window.location.href = this.value;
        }
    };
  </script>
</div>
