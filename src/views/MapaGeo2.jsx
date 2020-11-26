import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import Checkbox from 'components/CustomCheckbox/CustomCheckbox.jsx';

import './styles.css'
// import Card from "components/Card/Card.jsx";
// import {
//   Grid,
//   Row,
//   Col
// } from "react-bootstrap";


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
  const { idBem2 } = useParams();
  // var idBem2 = 901179000
  // console.log('bp param', idBem2)

  useEffect(() => {
    renderMap()
  }, [])


  const renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=InitMap&libraries=drawing,places&v=weekly")
    window.InitMap = InitMap
  }

  // const [visibilityFaixaDoc, setvisibilityFaixaDoc] = useState(true);
  // const [visibilityFaixa15, setvisibilityFaixa15] = useState(true);
  // const [visibilityFaixaProp, setvisibilityFaixaProp] = useState(true);
  // const [visibilityMalha, setvisibilityMalha] = useState(true);
  // const [visibilityAlteracaoMalha, setvisibilityAlteracaoMalha] = useState(true);
  // const [visibilityAreaRisco, setvisibilityAreaRisco] = useState(true);
  // const [visibilityComercio, setvisibilityComercio] = useState(true);
  // const [visibilityOrgaoPublico, setvisibilityOrgaoPublico] = useState(true);
  // const [visibilityOutros, setvisibilityOutros] = useState(true);
  // const [visibilityResidencia, setvisibilityResidencia] = useState(true);
  // const [visibilitySemAcesso, setvisibilitySemAcesso] = useState(true);
  // const [visibilityViaPublica, setvisibilityViaPublica] = useState(true);
  // const [visibilityTerrenoCercado, setvisibilityTerrenoCercado] = useState(true);

  let map;
  let geojesonLayerFaixa_doc,
      geojesonLayerFaixa15,
      geojesonLayerFaixaprop,
      geojesonLayerMalha,
      geojesonLayerOcup_alteracao_malha,
      geojesonLayerOcup_Area_de_risco,
      geojesonLayerOcup_Comercio,
      geojesonLayerOcup_orgao_publico,
      geojesonLayerOcupOutros,
      geojesonLayerOcup_Residencia,
      geojesonLayerOcup_sem_acesso,
      geojesonLayerOcup_terreno,
      geojesonLayerOcup_via_publica;



  function InitMap() {



    map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: { lat: -22.8059377, lng: -43.3884751 },
    });

    geojesonLayerFaixa_doc = new window.google.maps.Data();
    geojesonLayerFaixa15 = new window.google.maps.Data();
    geojesonLayerFaixaprop = new window.google.maps.Data();
    geojesonLayerMalha = new window.google.maps.Data();
    geojesonLayerOcup_alteracao_malha = new window.google.maps.Data();
    geojesonLayerOcup_Area_de_risco = new window.google.maps.Data();
    geojesonLayerOcup_Comercio = new window.google.maps.Data();
    geojesonLayerOcup_orgao_publico = new window.google.maps.Data();
    geojesonLayerOcupOutros = new window.google.maps.Data();
    geojesonLayerOcup_Residencia = new window.google.maps.Data();
    geojesonLayerOcup_sem_acesso = new window.google.maps.Data();
    geojesonLayerOcup_terreno = new window.google.maps.Data();
    geojesonLayerOcup_via_publica = new window.google.maps.Data();

    geojesonLayerFaixa_doc.loadGeoJson("./faixa_doc.geojson");
    geojesonLayerFaixa15.loadGeoJson("./faixa15.geojson");
    geojesonLayerFaixaprop.loadGeoJson("./faixaprop.geojson");
    geojesonLayerMalha.loadGeoJson("./malha.geojson");
    geojesonLayerOcup_alteracao_malha.loadGeoJson("./ocup_alteracao_da_malha.geojson");
    geojesonLayerOcup_Area_de_risco.loadGeoJson("./ocup_area_de_risco.geojson");
    geojesonLayerOcup_Comercio.loadGeoJson("./ocup_comercio.geojson");
    geojesonLayerOcup_orgao_publico.loadGeoJson("./ocup_orgao_publico.geojson");
    geojesonLayerOcupOutros.loadGeoJson("./ocup_outros.geojson");
    geojesonLayerOcup_Residencia.loadGeoJson("./ocup_residencia.geojson");
    geojesonLayerOcup_sem_acesso.loadGeoJson("./ocup_sem_acesso.geojson");
    geojesonLayerOcup_terreno.loadGeoJson("./ocup_terreno_cercado.geojson");
    geojesonLayerOcup_via_publica.loadGeoJson("./ocup_via_publica.geojson");

    const colorFaixaDoc = "#ff5400";
    const colorFaixa15 = "#55007d";
    const colorFaixaProp = "#33f544";
    const colorMalha = "#000000";
    const colorAlteracaoMalha = "#bbfcb8";
    const colorAreaRisco = "#686868";
    const colorComercio = "#00ffff";
    const colorOrgaoPublico = "#730000";
    const colorOutros = "#ff00ff";
    const colorResidencia = "#0055ff";
    const colorSemAcesso = "#bed2ff";
    const colorViaPublica = "#ff0000";
    const colorTerrenoCercado = "#ffff00";

    geojesonLayerFaixa_doc.setStyle({
      strokeColor: colorFaixaDoc,
    });
    geojesonLayerFaixa15.setStyle({
      strokeColor: colorFaixa15,
      strokeWeight: 2,
    });
    geojesonLayerFaixaprop.setStyle({
      strokeColor: colorFaixaProp,
      strokeWeight: 2,
    });
    geojesonLayerMalha.setStyle({
      strokeColor: colorMalha,
      strokeWeight: 2,
    });
    geojesonLayerOcup_alteracao_malha.setStyle({
      strokeColor: colorAlteracaoMalha,
      strokeWeight: 1,

    });
    geojesonLayerOcup_Area_de_risco.setStyle({
      fillColor: colorAreaRisco,
      strokeWeight: 1,

    });
    geojesonLayerOcup_Comercio.setStyle({
      fillColor: colorComercio,
      strokeWeight: 1,

    });
    geojesonLayerOcup_orgao_publico.setStyle({
      fillColor: colorOrgaoPublico,
      strokeWeight: 1,

    });
    geojesonLayerOcupOutros.setStyle({
      fillColor: colorOutros,
      strokeWeight: 1,

    });
    geojesonLayerOcup_Residencia.setStyle({
      fillColor: colorResidencia,
      strokeWeight: 1,

    });
    geojesonLayerOcup_sem_acesso.setStyle({
      fillColor: colorSemAcesso,
      strokeWeight: 1,

    });
    geojesonLayerOcup_terreno.setStyle({
      fillColor: colorTerrenoCercado,
      strokeWeight: 1,

    });
    geojesonLayerOcup_via_publica.setStyle({
      fillColor: colorViaPublica,
      strokeWeight: 1,

    });

    geojesonLayerFaixa_doc.setMap(map);
    geojesonLayerFaixa15.setMap(map);
    geojesonLayerFaixaprop.setMap(map);
    geojesonLayerMalha.setMap(map);
    geojesonLayerOcup_alteracao_malha.setMap(map);
    geojesonLayerOcup_Area_de_risco.setMap(map);
    geojesonLayerOcup_Comercio.setMap(map);
    geojesonLayerOcup_orgao_publico.setMap(map);
    geojesonLayerOcupOutros.setMap(map);
    geojesonLayerOcup_Residencia.setMap(map);
    geojesonLayerOcup_sem_acesso.setMap(map);
    geojesonLayerOcup_terreno.setMap(map);
    geojesonLayerOcup_via_publica.setMap(map);


    // *** DRONE ***
    const bounds = {
      8: [[95, 97], [142, 144],],
      9: [[191, 194], [285, 289],],
      10: [[383, 388], [570, 579],],
      11: [[766, 777], [1141, 1158],],
      12: [[1533, 1555], [2282, 2316],],
      13: [[3066, 3111], [4564, 4633],],
      14: [[6132, 6222], [9128, 9267],],
      15: [[12265, 12445], [18257, 18534],],
      16: [[24531, 24890], [36515, 37069],],
      17: [[49062, 49781], [73031, 74139],],
      18: [[98125, 99563], [146062, 148278],],
      19: [[196251, 199126], [146062, 148278],],
      20: [[392502, 398253], [146062, 148278],],
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


    const getPosition = function (feature) {
      if (feature.getGeometry().getType() === 'Point') {
        var position = feature.getGeometry().get();
      } else {/* Others */
        var bounds = new window.google.maps.LatLngBounds();
        feature.getGeometry().forEachLatLng(
          function (latlng) {
            bounds.extend(latlng);
          });
        position = bounds.getCenter();
      }
      return position;
    }


    var infowindow = new window.google.maps.InfoWindow({
      content: " "
    });


    geojesonLayerOcup_Comercio.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>Comércio</h5>
                            <b>Trecho: </b>${trecho}</br>
                            <b>Número da Ficha: </b>${ficha}
                            <br/><b>KM Inicial: </b>${kminicial}
                            </div>
                            <b float:right><a href="#/admin/bp/vp/f/visualiza/${ficha}" style="float:right">Ver Ficha</a></b></br>
                            `);
      infowindow.setPosition(position);
      infowindow.setOptions({
        pixelOffset: new window.google.maps.Size(0, -10)
      });
      infowindow.open(map);
    });
    window.google.maps.event.trigger('click');


    //POSICIONAR O SHAPE DE ACORDO COM O NUMERO DA FICHA

    var lastBp = 0;
    var highlightBP = function (feature, bpParameter) {
      var bppFeature = '' + feature.getProperty('N_FICHA');
      if (bppFeature == bpParameter) {
        console.log('entrei no if')
        var bounds = new window.google.maps.LatLngBounds();
        feature.getGeometry().forEachLatLng(function (latlng) {
          bounds.extend(latlng);
        });
        var offset = 0.0005;
        var center = bounds.getCenter();
        bounds.extend(new window.google.maps.LatLng(center.lat() + offset, center.lng() + offset));
        bounds.extend(new window.google.maps.LatLng(center.lat() - offset, center.lng() - offset));
        map.fitBounds(bounds);
        var event = {};
        event.feature = feature;

        if (bppFeature !== lastBp) {
          window.google.maps.event.trigger(map.data, 'click', event);
        }

        lastBp = bppFeature;
        return;
      }
    };

    window.google.maps.event.addListener(map.data, 'addfeature', function (event) {
      // var bp = getParameter('bp');
      if (lastBp == 0) {
        var bp = idBem2
        // console.log('BP:', bp)
        highlightBP(event.feature, bp);
      }
    });



    // FIM DA BUSCA DA FICHA


    // desenhar no mapa
    const drawingManager = new window.google.maps.drawing.DrawingManager({
      drawingMode: null,
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

    //input buscar
    const input = document.getElementById("pac-input");
    const searchBox = new window.google.maps.places.SearchBox(input);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
      // For each place, get the icon, name and location.
      const bounds = new window.google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon,
          size: new window.google.maps.Size(71, 71),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(17, 34),
          scaledSize: new window.google.maps.Size(25, 25),
        };
        // Create a marker for each place.
        markers.push(
          new window.google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

    // const buttonsDrone = (
    //   <div id="floating-panel">
    //     <Button onClick={removeFotosDrone}>Desativar</Button>
    //   </div>
    // )

    // Add controls to the map, allowing users to hide/show features.
    const styleControl = document.getElementById("style-selector-control");
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(styleControl);

    const styles = {
      default: [],
      hide: [
        {
          featureType: "poi.business",
          stylers: [{ visibility: "off" }],
        },
        // {
        //   featureType: Polygon,
        //   stylers: [{ visibility: "off" }],
        // },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
      ],
    };

    document.getElementById("poi").addEventListener("click", () => {
      if (document.getElementById("poi").checked ) {
        map.setOptions({ styles: styles["default"] });
      }
      else {
        map.setOptions({ styles: styles["hide"] });
      }
    });
    document.getElementById("faixa15").addEventListener("click", () => {
      (document.getElementById("faixa15").checked ) ? geojesonLayerFaixa15.setMap(map) : geojesonLayerFaixa15.setMap(null);
    });


  }

  return (
    <div>
      <div id="style-selector-control" class="map-control">
      <label for="show-faixa15">Via Permanente</label>
      <Checkbox
        isChecked
        number="malha"
        label="Malha Ferroviária"
      />
      <Checkbox
        isChecked
        number="faixa15"
        label="Faixa de 15 metros"
      />
      <Checkbox
        isChecked
        number="faixa_doc"
        label="Faixa Documental"
      />
      <Checkbox
        isChecked
        number="faixaProp"
        label="Faixa Proposta"
      />
      <label>Ocupações</label>
      <Checkbox
        isChecked
        number="ocup_alteracao_da_malha"
        label="Alteração da Malha"
      />
      <Checkbox
        isChecked
        number="ocup_area_de_risco"
        label="Área de Risco"
      />
      <Checkbox
        isChecked
        number="ocup_comercio"
        label="Comércio"
      />
      <Checkbox
        isChecked
        number="ocup_orgao_publico"
        label="Orgão Público"
      />
      <Checkbox
        isChecked
        number="ocup_outros"
        label="Outros"
      />
      <Checkbox
        isChecked
        number="ocup_residencia"
        label="Residência"
      />
      <Checkbox
        isChecked
        number="ocup_sem_acesso"
        label="Sem Acesso"
      />
      <Checkbox
        isChecked
        number="ocup_terreno_cercado"
        label="Terreno Cercado"
      />
      <Checkbox
        isChecked
        number="ocup_via_publica"
        label="Via Pública"
      />
      <label>Outros</label>
      <Checkbox
        isChecked
        number="poi"
        label="Pontos de Interesse"
      />
    </div>
      <div id="map"></div>
    </div>
    // <div>
    //   <div id="pac-input2">
    //     <input
    //     id="pac-input"
    //     class="controls"
    //     type="text"
    //     placeholder="Search Box"
    //     />
    //   </div>
    //   <div id="map">
    //   </div>
    // </div>
  )

}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default GoogleMaps;


