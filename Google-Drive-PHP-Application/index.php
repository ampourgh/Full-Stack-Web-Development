<?php
  session_start();
  error_reporting(E_ALL);
  ini_set('display_errors', 'On');


  $url_array = explode('?', 'http://'.$_SERVER ['HTTP_HOST'].$_SERVER['REQUEST_URI']);
  $url = $url_array[0];



  require_once 'google-api-php-client/src/Google_Client.php';
  require_once 'google-api-php-client/src/contrib/Google_DriveService.php';
  $client = new Google_Client();
  $client->setClientId('448233019044-0snhsbmmoljomdmq92eids3l3352sa0m.apps.googleusercontent.com');
  $client->setClientSecret('_37LYXNcbgWPkGSm8I9gsYHA');
  $client->setRedirectUri($url);
  $client->setScopes(array('https://www.googleapis.com/auth/drive'));

  if (isset($_GET['code'])) {

      $_SESSION['accessToken'] = $client->authenticate($_GET['code']);
      header('location:'.$url);exit;

  } elseif (!isset($_SESSION['accessToken'])) {
      // LOGIN CREDENTIALS HERE
      $client->authenticate();
      // $actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
      // if $actual_link == 'https://accounts.google.com/signin/oauth/identifier?client_id=448233019044-0snhsbmmoljomdmq92eids3l3352sa0m.apps.googleusercontent.com&as=Fur8ArIkle8pzxlZ9kvaMg&nosignup=1&destination=http%3A%2F%2Flocalhost%3A81&approval_state=!ChRWYXJULThkTHd0ZFl0M0NyMnJOcRIfVTdrc3A1QXZPY1lWd0ktM2lWMU9TaWNIeUg3OU5CWQ∙AB8iHBUAAAAAWvcJzHW6KxtuZRAeVuejQDXgmBB1kjhy&xsrfsig=AHgIfE8mzR4PA20T8XNEu-DlKv8a7cLodQ&flowName=GeneralOAuthFlow' {
        // <input type="email" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="username" spellcheck="false" tabindex="0" aria-label="Email or phone" name="identifier" autocapitalize="none" id="identifierId" dir="ltr" data-initial-dir="ltr" data-initial-value="jazzbtest@gmail.com" badinput="false">
        // echo "<script>function myFunction() {document.getElementById('identifierId').value = 'HELLO!';} myFunction();</script>";
        // echo "<script>console.log('1111111');</script>"
      // }


  }

  $files= array();
  $dir = dir('files');
  while ($file = $dir->read()) {
      if ($file != '.' && $file != '..') {
          $files[] = $file;
      }
  }
  $dir->close();
  if (!empty($_POST)) {
      try {

        $client->setAccessToken($_SESSION['accessToken']);
        $service = new Google_DriveService($client);
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $file = new Google_DriveFile();

        if (empty($finfo) || empty($client) || empty($service) || empty($file)) {
          throw new ErrorException('One or more of the variables is empty.');
        }

        foreach ($files as $file_name) {
            $file_path = 'files/'.$file_name;
            $mime_type = finfo_file($finfo, $file_path);
            $file->setTitle($file_name);
            $file->setDescription('This is a '.$mime_type.' document');
            $file->setMimeType($mime_type);
            $service->files->insert(
                $file,
                array(
                    'data' => file_get_contents($file_path),
                    'mimeType' => $mime_type
                )
            );
            unlink($file_path);
        }
      } catch (Exception $e){

        echo $e->getMessage();
        echo "<br>";
        print_r($e);
        echo "<br>";

      } finally {

        print_r(error_get_last());
        echo "<br><br>";
        echo "There was an error with the process.<br>If the error has to do with the file, there will be an error explanation above.";

      }
      finfo_close($finfo);
      header('location:'.$url);exit;

  }
  include 'index.phtml';
