<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">
  <script src="./js/html2canvas.js"></script>
  <script src="./js/html2canvas.min.js"></script>
  <script src="./js/jquery-3.3.1.js"></script>
  <link rel="stylesheet" href="./preview-css/style.css">
  <script>

  </script>
</head>
<body style="margin: 0px;">
  <b>File Name:</b> <span id="filename">PromotionNameGoesHere</span>.png
  <br><br><br>
  <div class="tab-section" data-example-id="togglable-tabs">
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade in active" role="tabpanel" id="chat-log" aria-labelledby="chat-log-tab">


        <div id="card">
          <h3 style="display: block; text-align: center; font-weight: 800;"><?php echo $_POST["title"]; ?></h3>
          <div class="advert-row">
            <div class="advert-column">

              <br>
              <img src='./img/tomato.jpg' class=''/>

            </div>
            <div class="advert-column">
              <div class="right-column-bg">
                <br>
                <h3 style="display: block; color: rgb(50,205,50); padding-left: 15%;"><?php echo $_POST["reduced_price"]; ?></h3>
                <h5 style="display: block; color: red; padding-left: 15%;"><s><?php echo $_POST["original_price"]; ?></s></h5>
              </div>
            </div>
          </div>
        </div>

        <br>

        <p>The image you produced has been saved to your downloads folder. If you're ready to publish the image, click the publish button to a and upload it below.</p>

        <br><br>

        <form method="POST" action="./form_submit.php">
          <input id="divID" style="display: none;" class="input"  type="text" name='image' />
          <br>
          <button type="submit" class='submit' value="Submit">submit</button> <span class="submit">Go back</span>
        </form>

      </div>
    </div>
  </div>
</div>
<script src="./js/form.js"></script>

<script>
$( document ).ready(function() {
  $(function(){html2canvas($(".tab-section").get(0), {
    allowTaint: true
  }).then(function (canvas) {
    var url = canvas.toDataURL();
    var name = document.getElementById("filename").innerText;
    var triggerDownload = $("<a>").attr("href", url).attr("download",name+".png").appendTo("body");

    $("#divID").val(triggerDownload[0]);
    // triggerDownload[0].click();
    // triggerDownload.remove();
  });
});
});
</script>
</body>
</html>
