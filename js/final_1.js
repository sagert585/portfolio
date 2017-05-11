var projection = ol.proj.get('EPSG:26913');
//var projection = ol.proj.get('EPSG:4326');

var basemap = new ol.layer.Tile({
  source: new ol.source.OSM()
});

var tif_A5 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    params: {'LAYERS':'ws_ssheets:35106-A5'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection
  }),
})

var tif_A6 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    params: {'LAYERS':'ws_ssheets:35106-A6'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection
  }),
})

var cont_A5 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    params: {'LAYERS':'ws_ssheets:35106-A5_CONT'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection
  }),
})

var cont_A6 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    params: {'LAYERS':'ws_ssheets:35106-A6_CONT'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection
  }),
})

var roads = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    params: {'LAYERS':'ws_ssheets:tgr2006se_bern_lka'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection
  }),
});

var map = new ol.Map({
  target: 'map_canvas',
  layers: [
    basemap, tif_A5, tif_A6, cont_A5, cont_A6, roads
    ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-106.630856, 35.068449]),
    zoom: 12
  })
});
