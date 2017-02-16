function initialize() {
  var islands = new google.maps.LatLng(46.832547,-90.762879)
  var mapOptions = {
    zoom: 12,
    center: islands,
    mapTypeId: 'terrain',
    mapTypeControl: true
  };
  var map = new google.maps.Map(
    document.getElementById("map_canvas"),
    mapOptions);

  var styleControl = document.getElementById('style-selector-control');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
  
  var styleSelector = document.getElementById('style-selector');
  map.setOptions({styles: styles[styleSelector.value]});
  
  styleSelector.addEventListener('change', function() {
    map.setOptions({styles: styles[styleSelector.value]});
}

var styles = {
default: null,
homemade: [
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c4ac8c"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6c3600"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "weight": 3
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#e8dfd0"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a4b5dd"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#005100"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ccffcc"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#6d9a10"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b4e800"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#3f580a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#bbbbbb"
      },
      {
        "weight": 2
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#8992b1"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#596880"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c0c0c0"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "weight": 8
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#0080ff"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#0033ff"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#00d9ff"
      },
      {
        "weight": 4
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b49292"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#371513"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#d7928e"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#004080"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#aaf7ff"
      }
    ]
  }
]}
