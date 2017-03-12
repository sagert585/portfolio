function initialize() {
  var midterm = new google.maps.LatLng(36.060574,-107.961692);
  var center = {lat: 36.060558, lng: -107.961745};
  var mapOptions = {
    zoom: 18,
    center: midterm,
    mapTypeId: 'satellite',
    };
  var map = new google.maps.Map(
    document.getElementById("map_canvas_mid"),
    mapOptions);
  var icon = {
    url: 'https://maps.google.com/mapfiles/kml/shapes/target.png',
    size: new google.maps.Size(64,64),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(32,32)
  }
  var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Pueblo Bonito",
    icon: icon
  });
  var infoContent = '<div class="infoBox">' + 
      '<p><a href="https://www.nps.gov/chcu/planyourvisit/pueblo-bonito.htm" target="_blank">' + 
      'National Parks Service' + 
      '</a></p></div>';
  var infoWindow = new google.maps.InfoWindow({
    content: infoContent
  });
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map,marker);
  });
}
