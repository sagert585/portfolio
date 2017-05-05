var projection = ol.proj.get('EPSG:3857');

//for future reference, NM StatePlane Central EPSG is 2258, UTM 13 N is 26913

var block_color = [0,255,0,.1]
var block_line_color = [0,255,0,1]
var county_color = [124,124,255,.25]
var county_line_color = [124,124,255,1]

///copying from Karl's example currently incomplete

var Layer_Stamen_watercolor = new ol.layer.Group({
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
    center: ol.proj.fromLonLat([-106.629361, 35.105380]),
    zoom: 15
  })
});

function setMapType(newType) {
    if(newType == 'OSM') {
        map.setLayerGroup(Layer_OSM);
    } else if (newType == 'STAMEN_Watercolor') {
        map.setLayerGroup(Layer_Stamen_watercolor);
    }
}

setMapType('STAMEN_Watercolor')
