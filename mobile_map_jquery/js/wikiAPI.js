// error notification with Wiki API
var $errorElem = $('#error-notification');

$(function wikiFilter() {

  // Title refers to the locations' name
  // wikiTitle refers to the wiki page's name
    var locations = [
      {title: 'Point Bolivar Lighthouse',
        wikiTitle: 'Point Bolivar Light'},
      {title: 'The Menil Collection',
        wikiTitle: 'Menil Collection'},
      {title: 'Nasa Space Center',
        wikiTitle: 'Space Center Houston'},
      {title: 'Sugarland Town Square',
        wikiTitle: 'Sugarland Town Square'},
      {title: 'Houston Museum District',
        wikiTitle: 'Houston Museum District'}
    ];

    // filter with ENTER key
    $("#itemFiltered").keypress(function enterFilter(e){
      if(e.keyCode===13){
        getWikiInfo();
      }
    });

    // filter with icon (magnifying glass)
    $("#itemFilteredClicked").on("click", function() {
      getWikiInfo();
    });

    function getWikiInfo(){
        // find the wiki content for first filter result
        for (var i = 0; i < locations.length; i++){

          // if start of loop, clear existing wiki content on page
          if (i == 0) {
            $("#wikiInfo").empty();
          }

          // if filter matches location, get the wikipedia article for location
          if (locations[i].title.toLowerCase().indexOf($(
            '#itemFiltered').val()) >= 0 && $('#itemFiltered').val() != '') {
            var itemFiltered = locations[i].wikiTitle;
            break;

          // else if at the end of loop, don't proceed
          } else if (i == (locations.length - 1)){
            var itemFiltered = '';
            break;
          }
        }

        // search the location's wiki title
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
          + itemFiltered +"&format=json&callback=wikiCallback";
        $.ajax({
          url: url,

          // default is GET, also can make a POST request
          // type: 'GET',
          contentType: "application/jsonp; charset=utf-8",

          // asynchronous call; no sequential order for when fucntion executes
          async: true,

          // jsonp: callback=wikiCallback
          dataType: "jsonp",
          success: function(data, status, jqXHR) {

            // empty pre-existing wiki information before appending new Wiki
            $("#wikiInfo").empty();

            // appends wiki introductory content and url img at the end
            if (itemFiltered != '') {
              $("#wikiInfo").append("<br>" + data[2] + " "
                + "<a href=" + data[3] + " target='_blank'>"
                + "<img src='img/external.png' alt='to wikipedia' class='external-img'></img>"
                + "</a>");
            }
        }
      })
    }

// error handler
}).error(function(e) {
    $errorElem.text('Wikipedia content could not be loaded.');
    });
