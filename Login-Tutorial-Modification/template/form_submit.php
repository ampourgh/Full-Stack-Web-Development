<?php

  // SELECT * FROM `promotion` WHERE template_id=1
  // alter table promotion AUTO_INCREMENT = 1

  session_start();

  $mysqli = new mysqli("localhost", "root", "root", "accounts");
  // $target = "./images/".basename($_FILES['image']['name']);
  // move_uploaded_file($_FILES['image']['tmp_name'], $target);

  $template_id = $mysqli->escape_string($_POST['template_id']);
  $username = $_SESSION['username'];
  $title = $mysqli->escape_string($_POST['title']);
  $description = $mysqli->escape_string($_POST['description']);
  $reduced_price = $mysqli->escape_string($_POST['reduced_price']);
  $original_price = $mysqli->escape_string($_POST['original_price']);
  // $name = $mysqli->escape_string($_FILES['image']['name']);

  $errors=array();
  $allowed_ext= array('jpg','jpeg','png','gif');
  $file_name =$_FILES['image']['name'];
  $file_ext = strtolower( end(explode('.',$file_name)));
  echo $name.'<br>';

  $file_size=$_FILES['image']['size'];
  $file_tmp= $_FILES['image']['tmp_name'];
  echo $file_tmp;echo "<br>";

  $type = pathinfo($file_tmp, PATHINFO_EXTENSION);
  $data = file_get_contents( $file_tmp );
  $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
  echo "Base64 is ".$base64;



  if(in_array($file_ext,$allowed_ext) === false)
  {
      $errors[]='Extension not allowed';
  }

  if($file_size > 2097152)
  {
      $errors[]= 'File size must be under 2mb';

  }
  if(empty($errors))
  {
     if( move_uploaded_file($file_tmp, './images/'.$file_name));
     {
      $name = $base64;
      echo 'File uploaded';
     }
  }
  else
  {
      foreach($errors as $error)
      {
          echo $error , '<br/>';
      }
  }


  $sql = "INSERT INTO promotion (template_id, username, image, title, description, reduced_price, original_price) "
          . "VALUES ('$template_id', '$username', '$name', '$title', '$description','$reduced_price', '$original_price')";
  $mysqli->query($sql)
 ?>
