var Layer_Stamen_watercolor = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'watercolor'})
        })
    ]
});
var Layer_Stamen_burningmap = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
          source: new ol.source.Stamen({layer: 'burningmap'})
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
    center: ol.proj.fromLonLat([136.648869, 36.577930]), 
    zoom: 15
  })
});

function setMapType(newType) {
    if(newType == 'OSM') {
        map.setLayerGroup(Layer_OSM);
    } else if (newType == 'STAMEN_Watercolor') {
        map.setLayerGroup(Layer_Stamen_watercolor);
    } else if (newType == 'STAMEN_Burningmap') {
        map.setLayerGroup(Layer_Stamen_burningmap);
    }
}

setMapType('STAMEN_Watercolor')
