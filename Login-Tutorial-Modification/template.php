<?php
  if (isset($_GET["temp"])) {
    header('Location: /template/'.$_GET["temp"].'.php');
  }
?>
