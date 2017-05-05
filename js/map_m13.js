var projection = ol.proj.get('EPSG:26913');

var SPAR = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    attributions: new ol.Attribution({
      html: 'ESRI Maps & Data'
    }),
    params: {'LAYERS':'ws_ssheets:e2sfcam_blockGroups'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection,
    format: new ol.format.KML({
      extractStyles:false
    })
  }),
})

var SHA = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    attributions: new ol.Attribution({
      html: 'NM IBIS'
    }),
    params: {'LAYERS':'ws_ssheets:SmallAreas_ABQ_w_CancerIncidence'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection,
    format: new ol.format.KML({
      extractStyles:false
    })
  }),
})

var cities = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    attributions: new ol.Attribution({
      html: 'CABQ.gov'
    }),
    params: {'LAYERS':'ws_ssheets:ABQ_RR'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection,
    format: new ol.format.KML({
      extractStyles:false
    })
  }),
})

var hospitals = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    attributions: new ol.Attribution({
      html: 'UNM RGIS'
    }),
    params: {'LAYERS':'ws_ssheets:GeneralHospitals'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection,
    format: new ol.format.KML({
      extractStyles:false
    })
  }),
})

var mammograms = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    attributions: new ol.Attribution({
      html: 'ESRI Maps & Data'
    }),
    params: {'LAYERS':'ws_ssheets:MammographyFacilities'},
    url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
    serverType: 'geoserver',
    projection: projection,
    format: new ol.format.KML({
      extractStyles:false
    })
  }),
})

var SPAR_Layers = new ol.layer.Group({
    layers: [
        SPAR, cities, hospitals, mammograms
    ]
});

var SHA_Layers = new ol.layer.Group({
    layers: [
        SHA, cities, hospitals, mammograms
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
