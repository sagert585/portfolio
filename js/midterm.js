function initialize() {
  var midterm = new google.maps.LatLng(36.060574,-107.961692)
  var mapOptions = {
    zoom: 18,
    center: midterm,
    mapTypeId: 'satellite',
    };
  var map = new google.maps.Map(
    document.getElementById("map_canvas_mid"),
    mapOptions);
  var icon = {
    url: 'http://maps.google.com/mapfiles/kml/shapes/target.png'
  }
  var marker = new google.maps.Marker({
    position: midterm,
    map: map,
    title: "Pueblo Bonito",
    icon: icon
  });
}
