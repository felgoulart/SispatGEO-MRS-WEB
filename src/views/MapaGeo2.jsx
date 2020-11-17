import React, { useState, useLayoutEffect, useEffect }  from "react";
import api from '../services/api';


const baseURL = process.env.REACT_APP_BASE_URL;


const styles = {
  default: [],
  hide: [
    {
      featureType: "poi",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels.icon",
      stylers: [{ visibility: "true" }]
    },
  ]
};



function GoogleMaps(props) {


  useEffect(() => {
    renderMap()
  }, [])


  const renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=InitMap")
    window.InitMap = InitMap
  }


  const [valorIDVersao, setValorIDVersao] = useState([]);
  const [valorFicha, setValorFicha] = useState([]);


  useEffect(() => {
    api.get(`/faixadominio/ficha/${valorFicha}`, {

    }).then(response => {

      setValorIDVersao(response.data.IDVersao);

      console.log(response.data.IDVersao)

    })
    // eslint-disable-next-line
  }, [valorFicha])








  const InitMap = () => {

    var map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: { lat: -22.8059377, lng: -43.3884751 },
    });
    // map.data.loadGeoJson("./15metros.geojson");
    // map.data.loadGeoJson("./malha.geojson");
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
      if (feature.getGeometry().getType() == 'Point') {
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
      const f = ev.feature;
      const tipo = f.getProperty('IDI');
      const ficha = f.getProperty('N_FICHA');
      const kminicial = f.getProperty('KM_INICIAL');
      const kmfinal = f.getProperty('KM_FINAL');
      const position = getPosition(f);

      setValorFicha(ficha);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>${tipo}</h5>
                            <b>Número da Ficha: </b>${ficha}
                            <br/><b>KM Inicial: </b>${kminicial}
                            <br/><b>KM Final: </b>${kmfinal}</div>
                            <b float:right><a href="#/admin/bp/vp/f/visualiza/${valorIDVersao}" style="float:right">Ver Ficha</a></b></br>
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


  }

    return (
        <div id="map"></div>
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


