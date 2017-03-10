function initialize() {
  var islands2 = new google.maps.LatLng(46.916668,-90.672922)
  var bigtop = new google.maps.LatLng(46.777852, -90.893602)
  var flats = new google.maps.LatLng(46.725625, -90.601327)
  var camp = new google.maps.LatLng(46.805048, -90.836346)
  var orchard = new google.maps.LatLng(46.831578, -90.836273)
  var pier = new google.maps.LatLng(46.810883, -90.811626)
  var mapOptions = {
    zoom: 10,
    center: islands2,
    mapTypeId: 'terrain',
    scaleControl: true,
    rotateControl: true,
    styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]
};
  
var layer1 = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: "1pjK3l1oa8rLG56mQYlsmTZjocpICznvDR778RnHi",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      },
      title: "col0"
    });
  
var layer2 = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col5",
        from: "1-bRR0NErzW-vPr5vS7wZ_xusN6FCJfDfzRzFT9uS",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  
var map = new google.maps.Map(
  document.getElementById("map_canvas"),
  mapOptions);
  
layer1.setMap(map);
layer2.setMap(map);
                              
var icons = {
  lighthouse: {
    name: 'Lighthouse',
    icon: 'http://maps.google.com/mapfiles/kml/shapes/lighthouse.png'
  },
  shipwreck: {
    name: 'Shipwreck',
    icon: 'http://maps.google.com/mapfiles/kml/paddle/orange-blank.png'
  },
  personal: {
    name: 'Memories',
    icon: 'http://maps.google.com/mapfiles/kml/paddle/blu-blank-lv.png'
  }
}
  
var legend = document.getElementById('legend');
for (var key in icons) {
  var type = icons[key];
  var name = type.name;
  var icon = type.icon;
  var div = document.createElement('div');
  div.innerHTML = '<img src="' + icon + '"> ' + name;
  legend.appendChild(div);
}
  
map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
  
var newicon = {
  url: 'http://maps.google.com/mapfiles/kml/paddle/purple-blank.png',
  scaledSize: new google.maps.Size(32, 32)
};
  
var bigtopMarker = new google.maps.Marker({
  position: bigtop,
  title: "Big Top Chautauqua",
  icon: newicon
});
bigtopMarker.setMap(map);
var flatsMarker = new google.maps.Marker({
  position: flats,
  title: "The Flats: A cooler full of root beer meant a day of fishing with my uncles.",
  icon: newicon
});
flatsMarker.setMap(map);
var campMarker = new google.maps.Marker({
  position: camp,
  title: "At the campground, every day started with stacks of my aunt's pancakes.",
  icon: newicon
});
campMarker.setMap(map);
var orchardMarker = new google.maps.Marker({
  position: orchard,
  title: "Orchard country, where regular customers can trade freshly caught lake trout for freshly picked raspberries.",
  icon: newicon
});
orchardMarker.setMap(map);
var pierMarker = new google.maps.Marker({
  position: pier,
  title: "The Pier: Perfect for an after-dinner walk with an ice cream cone.",
  icon: newicon
});
pierMarker.setMap(map);

}
