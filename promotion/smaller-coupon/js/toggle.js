// CTRL + SHIFT + DEL -> Clear browsing data -- Need to do in order for JQuery to work in PHP

$(document).ready(function(){
    $("#show").click(function(){

      // toggle form so user can see preview of the promotion
      $("#hide0").show();
      $("#hide1").show();
      $(".advert-column-change").css("width", "33%");
    });

    $("#hide").click(function(){

      // toggle form so user can see preview of the promotion
      $("#hide0").hide();
      $("#hide1").hide();
      $(".advert-column-change").css("width", "65%");
    });
});
