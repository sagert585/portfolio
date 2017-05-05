var projection = ol.proj.get('EPSG:3857');

//for future reference, NM StatePlane Central EPSG is 2258, UTM 13 N is 26913

var block_color = [0,255,0,.1]
var block_line_color = [0,255,0,1]
var county_color = [124,124,255,.25]
var county_line_color = [124,124,255,1]

///copying from Karl's example currently incomplete

var sha_kml = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'https://sagert585.github.io/portfolio/kml/NM_SHA_qgis.kml',
        projection: projection,
        format: new ol.format.KML({
            extractStyles:false
        })
    }),
    //style: SOMETHING
})

var Layer_OSM = new ol.layer.Tile({
            source: new ol.source.OSM()
});

var map = new ol.Map({
  target: 'map_canvas',
  layers: [
      Layer_OSM, sha_kml
      ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-106.629361, 35.105380]),
    zoom: 8
  })
});
