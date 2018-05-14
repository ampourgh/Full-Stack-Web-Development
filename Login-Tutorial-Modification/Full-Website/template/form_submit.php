<?php

  // SELECT * FROM `promotion` WHERE template_id=1
  // alter table promotion AUTO_INCREMENT = 1

  session_start();
  require 'PHPMailerAutoload.php';

  $mysqli = new mysqli("localhost", "root", "root", "accounts");
  // $target = "./images/".basename($_FILES['image']['name']);
  // move_uploaded_file($_FILES['image']['tmp_name'], $target);

  // $template_id = $mysqli->escape_string($_POST['template_id']);
  $username = $_SESSION['username'];
  // $title = $mysqli->escape_string($_POST['title']);
  // $description = $mysqli->escape_string($_POST['description']);
  // $reduced_price = $mysqli->escape_string($_POST['reduced_price']);
  // $original_price = $mysqli->escape_string($_POST['original_price']);
  // $name = $mysqli->escape_string($_FILES['image']['name']);

  // MAIN PICTURE
  $main = $mysqli->escape_string($_POST['main']);
  $hash = $mysqli->escape_string(md5(rand(0,1000)));

  define('UPLOAD_DIR', 'images/');
  $image_parts = explode(";base64,", $_POST['main']);
  $image_base64 = base64_decode($image_parts[1]);
  $file = UPLOAD_DIR . uniqid() . '.jpeg';
  file_put_contents($file, $image_base64);

  // STORE CATALOG PICTURE
  $store = $mysqli->escape_string($_POST['store']);
  $hash2 = $mysqli->escape_string(md5(rand(0,1000)));

  define('UPLOAD_DIR', 'images/');
  $image_parts2 = explode(";base64,", $_POST['store']);
  $image_base64_2 = base64_decode($image_parts2[1]);
  $file2 = UPLOAD_DIR . uniqid() . '.jpeg';
  file_put_contents($file2, $image_base64_2);

  // PROMOTION DETAIL PICTURE
  $detail = $mysqli->escape_string($_POST['detail']);
  $hash3 = $mysqli->escape_string(md5(rand(0,1000)));

  define('UPLOAD_DIR', 'images/');
  $image_parts3 = explode(";base64,", $_POST['detail']);
  $image_base64_3 = base64_decode($image_parts3[1]);
  $file3 = UPLOAD_DIR . uniqid() . '.jpeg';
  file_put_contents($file3, $image_base64_3);


  $mail = new PHPMailer;

  $mail->SMTPDebug = 3;                                 // Enable verbose debug output

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'jazzbtest@gmail.com';              // SMTP username
  $mail->Password = 'cloudjazzb';                       // SMTP password
  $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 587;                                    // TCP port to connect to

  $mail->setFrom('jazzbtest@gmail.com', 'jazz b');
  $mail->addAddress('jazzbtest@gmail.com', 'Image Posted on Database');     // Add a recipient
  // $mail->addAddress('ellen@example.com');               // Name is optional
  $mail->addReplyTo('jazzbtest@gmail.com', 'jazz b');
  // $mail->addCC('cc@example.com');
  // $mail->addBCC('bcc@example.com');

  $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
  $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
  $mail->isHTML(true);                                  // Set email format to HTML

  $mail->Subject = 'New Image Uploaded to the Database.';
  $mail->Body    = 'C:/Users/User/Desktop/Full-Website/template/'.$file
                   .'<br>'
                   .'http://localhost:81/template/verifyImage.php?username='.$username.'&hash='.$hash;;
  // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  if(!$mail->send()) {
      echo 'Message could not be sent.';
      echo 'Mailer Error: ' . $mail->ErrorInfo;
  } else {
      echo 'Message has been sent';
  }

  /*$errors=array();
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
  }*/

// template_id, title, description, reduced_price, original_price
// '$template_id', '$title', '$description','$reduced_price', '$original_price'
  $sql = "INSERT INTO promotion (username, image, hash) "
          . "VALUES ('$username', '$main', '$hash')";
  $mysqli->query($sql)
 ?>
