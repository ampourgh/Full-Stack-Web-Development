function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {

    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p><b>LAT</b>: ' + latitude + '° <br><b>LONG:</b>: ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=2000x2000&sensor=false&key=AIzaSyD5Ppf6iBwfPB6w6baG4sUSJAtIF4GMhQw";

    output.appendChild(img);

    var citySearch = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&sensor=false&key=AIzaSyD5Ppf6iBwfPB6w6baG4sUSJAtIF4GMhQw";

    output.appendChild(citySearch);

  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

geoFindMe();
