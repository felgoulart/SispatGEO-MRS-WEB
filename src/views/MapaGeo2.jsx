import React, { useEffect } from "react";
import { useParams } from 'react-router';
import Checkbox from 'components/CustomCheckbox/CustomCheckbox.jsx';
import './styles.css';



function GoogleMaps() {
  const { idBem2 } = useParams();
  const { tipoInvasao } = useParams();

  useEffect(() => {
    renderMap()
      // eslint-disable-next-line
  }, [])

  const GMAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key="+GMAP_API_KEY+"&callback=InitMap&libraries=drawing,places&v=weekly")
    window.InitMap = InitMap
  }

  const DRONE_URL = process.env.REACT_APP_BASE_URL_DRONE;
  let map;
  let geojesonLayerFaixa_doc,
      geojesonLayerFaixa15,
      geojesonLayerFaixaprop,
      geojesonLayerMalha,
      geojesonLayerOcup_alteracao_malha,
      geojesonLayerOcup_area_de_risco,
      geojesonLayerOcup_comercio,
      geojesonLayerOcup_orgao_publico,
      geojesonLayerOcup_outros,
      geojesonLayerOcup_residencia,
      geojesonLayerOcup_sem_acesso,
      geojesonLayerOcup_terreno,
      geojesonLayerOcup_via_publica;


  function InitMap() {



    map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: { lat: -22.8059377, lng: -43.3884751 },
      streetViewControlOptions: {
        position: window.google.maps.ControlPosition.BOTTOM_LEFT,
      }

    });

    geojesonLayerFaixa_doc = new window.google.maps.Data();
    geojesonLayerFaixa15 = new window.google.maps.Data();
    geojesonLayerFaixaprop = new window.google.maps.Data();
    geojesonLayerMalha = new window.google.maps.Data();
    geojesonLayerOcup_alteracao_malha = new window.google.maps.Data();
    geojesonLayerOcup_area_de_risco = new window.google.maps.Data();
    geojesonLayerOcup_comercio = new window.google.maps.Data();
    geojesonLayerOcup_orgao_publico = new window.google.maps.Data();
    geojesonLayerOcup_outros = new window.google.maps.Data();
    geojesonLayerOcup_residencia = new window.google.maps.Data();
    geojesonLayerOcup_sem_acesso = new window.google.maps.Data();
    geojesonLayerOcup_terreno = new window.google.maps.Data();
    geojesonLayerOcup_via_publica = new window.google.maps.Data();

    geojesonLayerFaixa_doc.loadGeoJson("./data/faixa_doc.geojson");
    geojesonLayerFaixa15.loadGeoJson("./data/faixa15.geojson");
    geojesonLayerFaixaprop.loadGeoJson("./data/faixaprop.geojson");
    geojesonLayerMalha.loadGeoJson("./data/malha.geojson");
    geojesonLayerOcup_alteracao_malha.loadGeoJson("./data/ocup_alteracao_da_malha.geojson");
    geojesonLayerOcup_area_de_risco.loadGeoJson("./data/ocup_area_de_risco.geojson");
    geojesonLayerOcup_comercio.loadGeoJson("./data/ocup_comercio.geojson");
    geojesonLayerOcup_orgao_publico.loadGeoJson("./data/ocup_orgao_publico.geojson");
    geojesonLayerOcup_outros.loadGeoJson("./data/ocup_outros.geojson");
    geojesonLayerOcup_residencia.loadGeoJson("./data/ocup_residencia.geojson");
    geojesonLayerOcup_sem_acesso.loadGeoJson("./data/ocup_sem_acesso.geojson");
    geojesonLayerOcup_terreno.loadGeoJson("./data/ocup_terreno_cercado.geojson");
    geojesonLayerOcup_via_publica.loadGeoJson("./data/ocup_via_publica.geojson");

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
    // const colorDesapropriacao = "#07f4b5";

    geojesonLayerFaixa_doc.setStyle({
      strokeColor: colorFaixaDoc,
      strokeWeight: 2,
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
    geojesonLayerOcup_area_de_risco.setStyle({
      fillColor: colorAreaRisco,
      strokeColor: colorAreaRisco,
      strokeWeight: 1,

    });
    geojesonLayerOcup_comercio.setStyle({
      fillColor: colorComercio,
      strokeColor: colorComercio,
      strokeWeight: 1,

    });
    geojesonLayerOcup_orgao_publico.setStyle({
      fillColor: colorOrgaoPublico,
      strokeColor: colorOrgaoPublico,
      strokeWeight: 1,

    });
    geojesonLayerOcup_outros.setStyle({
      fillColor: colorOutros,
      strokeColor: colorOutros,
      strokeWeight: 1,

    });
    geojesonLayerOcup_residencia.setStyle({
      fillColor: colorResidencia,
      strokeColor: colorResidencia,
      strokeWeight: 1
    });
    geojesonLayerOcup_sem_acesso.setStyle({
      fillColor: colorSemAcesso,
      strokeColor: colorSemAcesso,
      strokeWeight: 1,

    });
    geojesonLayerOcup_terreno.setStyle({
      fillColor: colorTerrenoCercado,
      strokeColor: colorTerrenoCercado,
      strokeWeight: 1,

    });
    geojesonLayerOcup_via_publica.setStyle({
      fillColor: colorViaPublica,
      strokeColor: colorViaPublica,
      strokeWeight: 1,
    });



    geojesonLayerFaixa_doc.setMap(map);
    geojesonLayerFaixa15.setMap(map);
    geojesonLayerFaixaprop.setMap(map);
    geojesonLayerMalha.setMap(map);
    geojesonLayerOcup_alteracao_malha.setMap(map);
    geojesonLayerOcup_area_de_risco.setMap(map);
    geojesonLayerOcup_comercio.setMap(map);
    geojesonLayerOcup_orgao_publico.setMap(map);
    geojesonLayerOcup_outros.setMap(map);
    geojesonLayerOcup_residencia.setMap(map);
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
      19: [[196251, 199126], [292124, 296557],],
      20: [[392502, 398253], [584249, 593115],],
    };
    const imageMapType = new window.google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        if (
          zoom < 8 ||
          zoom > 20 ||
          bounds[zoom][0][0] > coord.x ||
          coord.x > bounds[zoom][0][1] ||
          bounds[zoom][1][0] > coord.y ||
          coord.y > bounds[zoom][1][1]
        ) {
          return "";
        }
        return [
          DRONE_URL + "/sispat_geo_drone/drone/" + zoom + "/" + coord.x + "/" + coord.y + ".png"
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


    geojesonLayerOcup_comercio.addListener('click', ev => {
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

    geojesonLayerOcup_residencia.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>Residência</h5>
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

    geojesonLayerOcup_alteracao_malha.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>Alteração de Malha</h5>
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

    geojesonLayerOcup_area_de_risco.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>Área de Risco</h5>
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

    geojesonLayerOcup_orgao_publico.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>Orgão Público</h5>
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

    geojesonLayerOcup_outros.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>Outros</h5>
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

    geojesonLayerOcup_sem_acesso.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>Sem Acesso</h5>
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

    geojesonLayerOcup_terreno.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>Terreno</h5>
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

    geojesonLayerOcup_via_publica.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>Via Pública</h5>
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

    geojesonLayerFaixa_doc.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var subtrecho = f.getProperty('SUB_TRECHO');
      var kminicial = f.getProperty('KM_INICIAL');
      var kmfinal = f.getProperty('KM_FINAL');
      var planta = f.getProperty('PLANTA');
      var descricao = f.getProperty('DESCRICAO');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                              <div class="row">
                                <div class="col-md-9">
                                  <h5><b>Trecho: </b>${trecho}</h5>
                                </div>
                                <div class="col-md-3">
                                  <b float:right><a href="${DRONE_URL}/sispat_mrs_faixa/plantas/${planta}.pdf" target="_blank"" style="float:right">Ver Planta</a></b></br>
                                </div>
                              </div>
                              <b>Subtrecho: </b>${subtrecho}
                              <br/><b>KM Inicial: </b>${kminicial}
                              <br/><b>KM Final: </b>${kmfinal}
                              <br/><b>Planta: </b>${planta}
                              <br/><b>Descrição: </b>${descricao}</br>
                            </div>
                            `);
      infowindow.setPosition(position);
      infowindow.setOptions({
        pixelOffset: new window.google.maps.Size(0, -10)
      });
      infowindow.open(map);
    });
    window.google.maps.event.trigger('click');

    geojesonLayerMalha.addListener('click', ev => {
      var f = ev.feature;
      var trecho = f.getProperty('TRECHO');
      var subtrecho = f.getProperty('SUB_TRECHO');
      var kminicial = f.getProperty('KM_INICIAL');
      var kmfinal = f.getProperty('KM_FINAL');
      var descricao = f.getProperty('DESCRICAO');
      var position = getPosition(f);

      infowindow.setContent(`<div>
                                  <h5><b>Trecho: </b>${trecho}</h5>
                              <b>Subtrecho: </b>${subtrecho}
                              <br/><b>KM Inicial: </b>${kminicial}
                              <br/><b>KM Final: </b>${kmfinal}
                              <br/><b>Descrição: </b>${descricao}</br>
                            </div>
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
      // console.log('entrei na function')
      var bppFeature = '' + feature.getProperty('N_FICHA');
      // eslint-disable-next-line
      if (bppFeature == bpParameter) {
        // console.log('entrei no if')
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


    window.google.maps.event.addListener(geojesonLayerOcup_comercio, 'addfeature', function (event) {
      // var bp = getParameter('bp');
      // eslint-disable-next-line
      if (lastBp == 0 && tipoInvasao == 'CMR') {
        var bp = idBem2
        // // console.log('BP:', bp)
        highlightBP(event.feature, bp);
        var f = event.feature;
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
      }
    });

    window.google.maps.event.addListener(geojesonLayerOcup_residencia, 'addfeature', function (event) {
      // var bp = getParameter('bp');
      // eslint-disable-next-line
      if (lastBp == 0 && tipoInvasao =='RSD') {
        var bp = idBem2
        // // console.log('BP:', bp)
        highlightBP(event.feature, bp);
        var f = event.feature;
        var trecho = f.getProperty('TRECHO');
        var ficha = f.getProperty('N_FICHA');
        var kminicial = f.getProperty('KM_INICIAL');
        var position = getPosition(f);

        infowindow.setContent(`<div>
                              <h5><b>Tipo da Ocupação: </b>Residência</h5>
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
      }
    });

    window.google.maps.event.addListener(geojesonLayerOcup_alteracao_malha, 'addfeature', function (event) {
      // eslint-disable-next-line
      if (lastBp == 0 && tipoInvasao =='AMF') {
        var bp = idBem2
        // // console.log('BP:', bp)
        highlightBP(event.feature, bp);
        var f = event.feature;
        var trecho = f.getProperty('TRECHO');
        var ficha = f.getProperty('N_FICHA');
        var kminicial = f.getProperty('KM_INICIAL');
        var position = getPosition(f);

        infowindow.setContent(`<div>
                              <h5><b>Tipo da Ocupação: </b>Alteração da Malha</h5>
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
      }
    });

    window.google.maps.event.addListener(geojesonLayerOcup_area_de_risco, 'addfeature', function (event) {
      // eslint-disable-next-line
      if (lastBp == 0 && tipoInvasao =='ADR') {
        var bp = idBem2
        // // console.log('BP:', bp)
        highlightBP(event.feature, bp);
        var f = event.feature;
        var trecho = f.getProperty('TRECHO');
        var ficha = f.getProperty('N_FICHA');
        var kminicial = f.getProperty('KM_INICIAL');
        var position = getPosition(f);

        infowindow.setContent(`<div>
                              <h5><b>Tipo da Ocupação: </b>Área de Risco</h5>
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
      }
    });

    window.google.maps.event.addListener(geojesonLayerOcup_orgao_publico, 'addfeature', function (event) {
      // eslint-disable-next-line
      if (lastBp == 0 && tipoInvasao =='OPL') {
        var bp = idBem2
        // // console.log('BP:', bp)
        highlightBP(event.feature, bp);
        var f = event.feature;
        var trecho = f.getProperty('TRECHO');
        var ficha = f.getProperty('N_FICHA');
        var kminicial = f.getProperty('KM_INICIAL');
        var position = getPosition(f);

        infowindow.setContent(`<div>
                              <h5><b>Tipo da Ocupação: </b>Orgão Público</h5>
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
      }
    });

    window.google.maps.event.addListener(geojesonLayerOcup_outros, 'addfeature', function (event) {
      // eslint-disable-next-line
      if (lastBp == 0 && tipoInvasao =='OTR') {
        var bp = idBem2
        // // console.log('BP:', bp)
        highlightBP(event.feature, bp);
        var f = event.feature;
        var trecho = f.getProperty('TRECHO');
        var ficha = f.getProperty('N_FICHA');
        var kminicial = f.getProperty('KM_INICIAL');
        var position = getPosition(f);

        infowindow.setContent(`<div>
                              <h5><b>Tipo da Ocupação: </b>Outras</h5>
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
      }
    });

    window.google.maps.event.addListener(geojesonLayerOcup_sem_acesso, 'addfeature', function (event) {
      // eslint-disable-next-line
      if (lastBp == 0 && tipoInvasao =='SAC') {
        var bp = idBem2
        // // console.log('BP:', bp)
        highlightBP(event.feature, bp);
        var f = event.feature;
        var trecho = f.getProperty('TRECHO');
        var ficha = f.getProperty('N_FICHA');
        var kminicial = f.getProperty('KM_INICIAL');
        var position = getPosition(f);

        infowindow.setContent(`<div>
                              <h5><b>Tipo da Ocupação: </b>Sem Acesso</h5>
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
      }
    });

    window.google.maps.event.addListener(geojesonLayerOcup_terreno, 'addfeature', function (event) {
      // eslint-disable-next-line
      if (lastBp == 0 && tipoInvasao =='TRC') {
        var bp = idBem2
        // // console.log('BP:', bp)
        highlightBP(event.feature, bp);
        var f = event.feature;
        var trecho = f.getProperty('TRECHO');
        var ficha = f.getProperty('N_FICHA');
        var kminicial = f.getProperty('KM_INICIAL');
        var position = getPosition(f);

        infowindow.setContent(`<div>
                              <h5><b>Tipo da Ocupação: </b>Terreno Cercado</h5>
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
      }
    });

    window.google.maps.event.addListener(geojesonLayerOcup_via_publica, 'addfeature', function (event) {
      // eslint-disable-next-line
      if (lastBp == 0 && tipoInvasao =='VPL') {
        var bp = idBem2
        // // console.log('BP:', bp)
        highlightBP(event.feature, bp);
        var f = event.feature;
        var trecho = f.getProperty('TRECHO');
        var ficha = f.getProperty('N_FICHA');
        var kminicial = f.getProperty('KM_INICIAL');
        var position = getPosition(f);

        infowindow.setContent(`<div>
                              <h5><b>Tipo da Ocupação: </b>Via Pública</h5>
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
      }
    });

    // <ListenerFeature
    //  geojson = {geojesonLayerOcup_residencia}
    //  varLastBP = {lastBp}
    //  varTipoInvasao = {tipoInvasao}
    //  siglaTipoInvasao = 'RSD'
    //  varIdBem2 = {idBem2}
    //  NomeTipo = "Residência"
    //  varhighlightBP = {highlightBP}
    //  varGetPosition = {getPosition}
    //  varInfowindow = {infowindow}
    //  varMap = {map}
    //  />

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
      // eslint-disable-next-line
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
          // console.log("Returned place contains no geometry");
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

    // Add controls to the map, allowing users to hide/show features.
    const styleControl = document.getElementById("style-selector-control");
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(styleControl);

    const styles = {
      default: [],
      hide: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
      ],
    };
    map.setOptions({ styles: styles["hide"] });

    document.getElementById("poi").addEventListener("click", () => {
      if (document.getElementById("poi").checked ) {
        map.setOptions({ styles: styles["default"] });
      }
      else {
        map.setOptions({ styles: styles["hide"] });
      }
    });
    document.getElementById("malha").addEventListener("click", () => {
      (document.getElementById("malha").checked ) ? geojesonLayerMalha.setMap(map) : geojesonLayerMalha.setMap(null);
    });
    document.getElementById("faixa15").addEventListener("click", () => {
      (document.getElementById("faixa15").checked ) ? geojesonLayerFaixa15.setMap(map) : geojesonLayerFaixa15.setMap(null);
    });
    document.getElementById("faixa_doc").addEventListener("click", () => {
      (document.getElementById("faixa_doc").checked ) ? geojesonLayerFaixa_doc.setMap(map) : geojesonLayerFaixa_doc.setMap(null);
    });
    document.getElementById("faixaProp").addEventListener("click", () => {
      (document.getElementById("faixaProp").checked ) ? geojesonLayerFaixaprop.setMap(map) : geojesonLayerFaixaprop.setMap(null);
    });
    document.getElementById("ocup_alteracao_da_malha").addEventListener("click", () => {
      (document.getElementById("ocup_alteracao_da_malha").checked ) ? geojesonLayerOcup_alteracao_malha.setMap(map) : geojesonLayerOcup_alteracao_malha.setMap(null);
    });
    document.getElementById("ocup_area_de_risco").addEventListener("click", () => {
      (document.getElementById("ocup_area_de_risco").checked ) ? geojesonLayerOcup_area_de_risco.setMap(map) : geojesonLayerOcup_area_de_risco.setMap(null);
    });
    document.getElementById("ocup_comercio").addEventListener("click", () => {
      (document.getElementById("ocup_comercio").checked ) ? geojesonLayerOcup_comercio.setMap(map) : geojesonLayerOcup_comercio.setMap(null);
    });
    document.getElementById("ocup_orgao_publico").addEventListener("click", () => {
      (document.getElementById("ocup_orgao_publico").checked ) ? geojesonLayerOcup_orgao_publico.setMap(map) : geojesonLayerOcup_orgao_publico.setMap(null);
    });
    document.getElementById("ocup_outros").addEventListener("click", () => {
      (document.getElementById("ocup_outros").checked ) ? geojesonLayerOcup_outros.setMap(map) : geojesonLayerOcup_outros.setMap(null);
    });
    document.getElementById("ocup_residencia").addEventListener("click", () => {
      (document.getElementById("ocup_residencia").checked ) ? geojesonLayerOcup_residencia.setMap(map) : geojesonLayerOcup_residencia.setMap(null);
    });
    document.getElementById("ocup_sem_acesso").addEventListener("click", () => {
      (document.getElementById("ocup_sem_acesso").checked ) ? geojesonLayerOcup_sem_acesso.setMap(map) : geojesonLayerOcup_sem_acesso.setMap(null);
    });
    document.getElementById("ocup_terreno_cercado").addEventListener("click", () => {
      (document.getElementById("ocup_terreno_cercado").checked ) ? geojesonLayerOcup_terreno.setMap(map) : geojesonLayerOcup_terreno.setMap(null);
    });
    document.getElementById("ocup_via_publica").addEventListener("click", () => {
      (document.getElementById("ocup_via_publica").checked ) ? geojesonLayerOcup_via_publica.setMap(map) : geojesonLayerOcup_via_publica.setMap(null);
    });


  }

  return (
    <div>
      <div id="style-selector-control" class="map-control">
        <label for="show-faixa15">Via Permanente</label>
        <div class="colorMalhaFerroviaria borderColor">
          <Checkbox
            isChecked
            number="malha"
            label="Malha Ferroviária"
          />
        </div>
        <div class="colorFaixa15 borderColor">
          <Checkbox
            isChecked
            number="faixa15"
            label="Faixa de 15 metros"
          />
        </div>
        <div class="colorFaixaDoc borderColor">
          <Checkbox
            isChecked
            number="faixa_doc"
            label="Faixa Documental"
          />
        </div>
        <div class="colorFaixaProp borderColor">
          <Checkbox
            isChecked
            number="faixaProp"
            label="Faixa Proposta"
          />
        </div>
        <label>Ocupações</label>
        <div class="colorAlteracaoMalha borderColor">
          <Checkbox
            isChecked
            number="ocup_alteracao_da_malha"
            label="Alteração da Malha"
          />
        </div>
        <div class="colorAreaRisco borderColor">
          <Checkbox
            isChecked
            number="ocup_area_de_risco"
            label="Área de Risco"
          />
        </div>
        <div class="colorComercio borderColor">
          <Checkbox
            isChecked
            number="ocup_comercio"
            label="Comércio"
          />
        </div>
        <div class="colorOrgaoPublico borderColor">
          <Checkbox
            isChecked
            number="ocup_orgao_publico"
            label="Orgão Público"
          />
        </div>
        <div class="colorOutros borderColor">
          <Checkbox
            isChecked
            number="ocup_outros"
            label="Outros"
          />
        </div>
        <div class="colorResidencia borderColor">
          <Checkbox
            isChecked
            number="ocup_residencia"
            label="Residência"
          />
        </div>
        <div class="colorSemAcesso borderColor">
          <Checkbox
            isChecked
            number="ocup_sem_acesso"
            label="Sem Acesso"
          />
        </div>
        <div class="colorTerrenoCercado borderColor">
          <Checkbox
            isChecked
            number="ocup_terreno_cercado"
            label="Terreno Cercado"
          />
        </div>
        <div class="colorViaPublica borderColor">
          <Checkbox
            isChecked
            number="ocup_via_publica"
            label="Via Pública"
          />
        </div>
        <div class="colorDesapropriacao borderColor">
          <Checkbox
            isChecked
            number="ocup_desapropria"
            label="Desapropriação"
          />
        </div>
        <label>Outros</label>
        <Checkbox
          number="poi"
          label="Pontos de Interesse"
        />
      </div>
      <div id="map"></div>
  </div>

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


