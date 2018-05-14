<?php
  print_r($_FILES);
?>

<form action="" method="POST" enctype="multipart/form-data">
  <p>
    <input type="file" name="image" />
    <input type="submit" value="Upload" />
  </p>
</form>
