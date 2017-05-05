var projection = ol.proj.get('EPSG:3857');

//for future reference, NM StatePlane Central EPSG is 2258, UTM 13 N is 26913

var stroke_white = new ol.style.Stroke({color: 'white', width: 1});
var fill_UNM = new ol.style.Fill({color: 'red'});
var fill_Lovelace = new ol.style.Fill({color: 'purple'});
var fill_XRA = new ol.style.Fill({color: 'green'});
var fill_HR = new ol.style.Fill({color: 'yellow'});
var fill_ABQHP = new ol.style.Fill({color: 'blue'});
var SHA_fill_color = [0,0,0,.20];
var SHA_border_color = [0,0,0,1];
var SHA_style = new ol.style.Style({
  fill: new ol.style.Fill({
    color: SHA_fill_color
  }),
  stroke: new ol.style.Stroke({
    color: SHA_border_color,
    width: 2
  }),
})

var UNM_fac_style = new ol.style.Style({
  image: new ol.style.RegularShape({
    fill: fill_UNM,
    stroke: stroke_white,
    points: 4,
    radius: 10,
    rotation: Math.PI / 4,
    angle: 0
  })
})

var Lovelace_fac_style = new ol.style.Style({
  image: new ol.style.RegularShape({
    fill: fill_Lovelace,
    stroke: stroke_white,
    points: 4,
    radius: 10,
    rotation: Math.PI / 4,
    angle: 0
  })
})

var XRA_fac_style = new ol.style.Style({
  image: new ol.style.RegularShape({
    fill: fill_XRA,
    stroke: stroke_white,
    points: 3,
    radius: 10,
    rotation: Math.PI,
    angle: 0
  })
})

var HR_fac_style = new ol.style.Style({
  image: new ol.style.RegularShape({
    fill: fill_HR,
    stroke: stroke_white,
    points: 3,
    radius: 10,
    rotation: Math.PI,
    angle: 0
  })
})

var ABQHP_fac_style = new ol.style.Style({
  image: new ol.style.Circle({
    fill: fill_ABQHP,
    stroke: stroke_white,
    radius: 10
  })
})

var unmhCoord = [-106.628046,35.095995]
var unmsrmcCoord = [-106.680044,35.30871]
var xrabicCoord = [-106.59282,35.1342]
var xranwicCoord = [-106.645272,35.203243]
var hrCoord = [-106.595061,35.144919]
var hrrCoord = [-106.693266,35.219423]
var lovswCoord = [-106.585804,35.154636]
var lovwestCoord = [-106.676928,35.207148]
var lovwomCoord = [-106.590951,35.131868]
var abqhpCoord = [-106.585874,35.169522]

var unmhPoint = new ol.geom.Point(ol.proj.fromLonLat(unmhCoord, projection));
var unmsrmcPoint = new ol.geom.Point(ol.proj.fromLonLat(unmsrmcCoord, projection));
var xrabicPoint = new ol.geom.Point(ol.proj.fromLonLat(xrabicCoord, projection));
var xranwicPoint = new ol.geom.Point(ol.proj.fromLonLat(xranwicCoord, projection));
var hrPoint = new ol.geom.Point(ol.proj.fromLonLat(hrCoord, projection));
var hrrPoint = new ol.geom.Point(ol.proj.fromLonLat(hrrCoord, projection));
var lovswPoint = new ol.geom.Point(ol.proj.fromLonLat(lovswCoord, projection));
var lovwestPoint = new ol.geom.Point(ol.proj.fromLonLat(lovwestCoord, projection));
var lovwomPoint = new ol.geom.Point(ol.proj.fromLonLat(lovwomCoord, projection));
var abqhpPoint = new ol.geom.Point(ol.proj.fromLonLat(abqhpCoord, projection));

var sha_kml = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'https://sagert585.github.io/portfolio/kml/NM_SHA_qgis.kml',
        projection: projection,
        format: new ol.format.KML({
            extractStyles:false
        })
    }),
    style: SHA_style
});

var NM_facilities = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        attributions: new ol.Attribution({
            html: 'UNM RGIS'
        }),
        params: {'LAYERS':'Hospitals_NursingHomes',
                 'FORMAT':'image/png',
                 'TRANSPARENT':'true'
                },
        url: 'https://rgis-data.unm.edu/ApolloCatalogWMSPublic/service.svc/get?',
        projection: projection
    })
});
                 
var Layer_OSM = new ol.layer.Tile({
            source: new ol.source.OSM()
});

var map = new ol.Map({
  target: 'map_canvas',
  layers: [
      Layer_OSM, sha_kml, NM_facilities
      ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-106.629361, 35.105380]),
    zoom: 8
  })
});
