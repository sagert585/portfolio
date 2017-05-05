var projection = ol.proj.get('EPSG:26913')

var SPAR = new ol.layer.Tile({

var SPAR_Map = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'watercolor'})
        })
    ]
});

var Layer_OSM = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ]
});

var map = new ol.Map({
  target: 'map_canvas',
  view: new ol.View({
    center: ol.proj.fromLonLat([-106.583906, 35.174422]),
    zoom: 11
  })
});

function setMapType(newType) {
    if(newType == 'SPAR_Map') {
        map.setLayerGroup(SPAR_Layers);
    } else if (newType == 'SHA_Map') {
        map.setLayerGroup(SHA_Layers);
    }
}

setMapType('SHA_Map')
