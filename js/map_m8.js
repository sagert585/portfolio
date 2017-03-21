var map = new ol.Map({
  target: 'map_canvas',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([36.739857, 137.027963]),
    zoom: 4
  })
});
