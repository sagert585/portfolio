function initialize() {
  var islands = new google.maps.LatLng(46.832547,-90.762879)
  var mapOptions = {
    zoom: 12,
    center: islands,
    mapTypeId: 'terrain'
  };
  var map = new google.maps.Map(
    document.getElementById("map_canvas"),
    mapOptions);
}
