var map = new ol.Map({
  target: 'map_canvas',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([137.027963, 36.739857]),
    zoom: 4
  })
});
