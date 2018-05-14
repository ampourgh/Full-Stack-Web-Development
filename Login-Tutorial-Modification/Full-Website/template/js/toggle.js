// CTRL + SHIFT + DEL -> Clear browsing data -- Need to do in order for JQuery to work in PHP

$(document).ready(function(){
    $("#show").click(function(){

      // toggle form so user can see preview of the promotion
      $("#hide0").show();
      $("#hide1").show();
      $(".advert-column-change").css("width", "50%");
    });

    $("#hide").click(function(){

      // toggle form so user can see preview of the promotion
      $("#hide0").hide();
      $("#hide1").hide();
      $(".advert-column-change").css("width", "65%");
    });

    $('#description').keyup(function() {
      if( $(this).val().length === 0 && $('#disclaimer').val().length === 0) {
        $("div.card").removeClass('card2');
        $("#company-logo").hide();
      } else {
        $("div.card").addClass('card2');
      }
    });

    $('#description').blur(function() {
      if( $(this).val().length === 0 && $('#disclaimer').val().length === 0) {
        $("div.card").removeClass('card2');
        $("#company-logo").hide();
      } else {
        $("div.card").addClass('card2');
      }
    });

    $('#disclaimer').keyup(function() {
      if($(this).val().length === 0) {
        $("div.card").removeClass('card3');
        $("#company-logo").hide();
        $("#barcode").hide();
      } else {
        $("div.card").addClass('card3');
        $("#company-logo").show();
        $("#company-logo").css({ display: "block" });
        $("#barcode").show();
        $("#barcode").css({ display: "block" });
      }
    });

    $('#disclaimer').blur(function() {
      if($(this).val().length === 0) {
        $("div.card").removeClass('card3');
        $("#company-logo").hide();
        $("#barcode").hide();
      } else {
        $("div.card").addClass('card3');
        $("#company-logo").show();
        $("#company-logo").css({ display: "block" });
        $("#barcode").show();
        $("#barcode").css({ display: "block" });
      }
    });
});
