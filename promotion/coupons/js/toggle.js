// CTRL + SHIFT + DEL -> Clear browsing data -- Need to do in order for JQuery to work in PHP

$(document).ready(function(){
    $("#toggle").click(function(){

      // toggle between Edit and preview
      $(this).text() === 'Edit' ? $(this).text('Preview') : $(this).text('Edit');

      // toggle form so user can see preview of the promotion
      $("#hide0").toggle();
      $("#hide1").toggle();
      $("#hide2").toggle();
      $("#hide3").toggle();
      $("#hide4").toggle();
      $("#hide5").toggle();
      $("#hide6").toggle();
      $("#hide7").toggle();
      $("#hide8").toggle();
      $("#hide9").toggle();
      $("#hide10").toggle();
      $("#hide11").toggle();
      $("#hide12").toggle();
      $("#hide13").toggle();
      $("#wrapper").toggle();
      $("#card-inside").toggle();
    });
});
