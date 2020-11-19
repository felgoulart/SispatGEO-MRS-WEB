import React, {useEffect }  from "react";
import {useParams} from 'react-router';




// const styles = {
//   default: [],
//   hide: [
//     {
//       featureType: "poi",
//       elementType: "labels.icon",
//       stylers: [{ visibility: "off" }]
//     },
//     {
//       featureType: "transit",
//       elementType: "labels.icon",
//       stylers: [{ visibility: "off" }]
//     },
//     {
//       featureType: "transit.station.rail",
//       elementType: "labels.icon",
//       stylers: [{ visibility: "true" }]
//     },
//   ]
// };



function GoogleMaps() {
	const {idBem2} = useParams();
	// var idBem2 = 901179000
  console.log('bp param', idBem2)

  useEffect(() => {
    renderMap()
  }, [])


  const renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=InitMap&libraries=drawing&v=weekly")
    window.InitMap = InitMap
  }

  const InitMap = () => {

    var map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: { lat: -22.8059377, lng: -43.3884751 },
    });
    map.data.loadGeoJson("./malha.geojson");
    map.data.loadGeoJson("./15metros.geojson");
    // map.data.loadGeoJson("./ALTERACAO_DA_MALHA.geojson");
    // map.data.loadGeoJson("./AREA_DE_RISCO.geojson");
    map.data.loadGeoJson("./COMERCIO.geojson");
    // map.data.loadGeoJson("./ORGAO_PUBLICO.geojson");
    // map.data.loadGeoJson("./OUTROS.geojson");
    // map.data.loadGeoJson("./RESIDENCIA.geojson");
    // map.data.loadGeoJson("./SEM_ACESSO.geojson");
    // map.data.loadGeoJson("./TERRENO_CERCADO.geojson");
    // map.data.loadGeoJson("./VIA_PUBLICA.geojson");


    // *** DRONE ***
    const bounds = {
      8:  [[95, 97],[142, 144],],
      9:  [[191, 194],[285, 289],],
      10: [[383, 388],[570, 579],],
      11: [[766, 777],[1141, 1158],],
      12: [[1533, 1555],[2282, 2316],],
      13: [[3066, 3111],[4564, 4633],],
      14: [[6132, 6222],[9128, 9267],],
      15: [[12265, 12445],[18257, 18534],],
      16: [[24531, 24890],[36515, 37069],],
      17: [[49062, 49781],[73031, 74139],],
      18: [[98125, 99563],[146062, 148278],],
      19: [[196251, 199126],[146062, 148278],],
      20: [[392502, 398253],[146062, 148278],],
    };
    const imageMapType = new window.google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        if (
          zoom < 8 ||
          zoom > 18 ||
          bounds[zoom][0][0] > coord.x ||
          coord.x > bounds[zoom][0][1] ||
          bounds[zoom][1][0] > coord.y ||
          coord.y > bounds[zoom][1][1]
        ) {
          return "";
        }
        return [
          "http://www.ativosferroviarios.com.br:8090/sispat_geo_drone/drone/" + zoom + "/" + coord.x + "/" + coord.y + ".png"
        ].join("");
      },
      tileSize: new window.google.maps.Size(256, 256),
    });
    map.overlayMapTypes.push(imageMapType);

    // *** FIM DO DRONE ***

    const getPosition = function(feature) {
      if (feature.getGeometry().getType() === 'Point') {
        var position = feature.getGeometry().get();
      } else {/* Others */
        var bounds = new window.google.maps.LatLngBounds();
        feature.getGeometry().forEachLatLng(
            function(latlng) {
              bounds.extend(latlng);
            });
        position = bounds.getCenter();
      }
      return position;
    }


    var infowindow = new window.google.maps.InfoWindow({
      content: " "
    });




    map.data.addListener('click', ev => {
      var f = ev.feature;
      var tipo = f.getProperty('IDI');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var kmfinal = f.getProperty('KM_FINAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>${tipo}</h5>
                            <b>Número da Ficha: </b>${ficha}
                            <br/><b>KM Inicial: </b>${kminicial}
                            <br/><b>KM Final: </b>${kmfinal}</div>
                            <b float:right><a href="#/admin/bp/vp/f/visualiza/${ficha}" style="float:right">Ver Ficha</a></b></br>
                            `);
      // Hat tip geocodezip: http://stackoverflow.com/questions/23814197
      // infowindow.setPosition(f.getGeometry().getAt(0).getAt(0).getArray());
      infowindow.setPosition(position);
      infowindow.setOptions({
        pixelOffset: new window.google.maps.Size(0, -10)
      });
      infowindow.open(map);
    });
    window.google.maps.event.trigger('click');


    //POSICIONAR O SHAPE DE ACORDO COM O NUMERO DA FICHA

  var lastBp = 0;
	var highlightBP = function(feature, bpParameter) {
    var bppFeature = '' + feature.getProperty('N_FICHA');
		if (bppFeature == bpParameter) {
      console.log('entrei no if')
			var bounds = new window.google.maps.LatLngBounds();
			feature.getGeometry().forEachLatLng(function(latlng) {
				bounds.extend(latlng);
      });
      var offset = 0.0005;
      var center = bounds.getCenter();
      bounds.extend(new window.google.maps.LatLng(center.lat() + offset, center.lng() + offset));
      bounds.extend(new window.google.maps.LatLng(center.lat() - offset, center.lng() - offset));
			map.fitBounds(bounds);
			var event = {};
			event.feature = feature;

			if(bppFeature !== lastBp) {
				window.google.maps.event.trigger(map.data, 'click', event);
			}

      lastBp = bppFeature;
      return;
		}
  };

    window.google.maps.event.addListener(map.data, 'addfeature', function(event) {
      // var bp = getParameter('bp');
      if (lastBp == 0) {
        var bp = idBem2
        console.log('BP:', bp)
        highlightBP(event.feature, bp);
      }
    });



  // FIM DA BUSCA DA FICHA


  // desenhar no mapa
  const drawingManager = new window.google.maps.drawing.DrawingManager({
    drawingMode: window.google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: window.google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        window.google.maps.drawing.OverlayType.MARKER,
        window.google.maps.drawing.OverlayType.CIRCLE,
        window.google.maps.drawing.OverlayType.POLYGON,
        window.google.maps.drawing.OverlayType.POLYLINE,
        window.google.maps.drawing.OverlayType.RECTANGLE,
      ],
    },
    markerOptions: {
      icon:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });
  drawingManager.setMap(map);
  // fim do desenhar



}


    return (
        <div id="map">

        </div>
    )

}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default GoogleMaps;


