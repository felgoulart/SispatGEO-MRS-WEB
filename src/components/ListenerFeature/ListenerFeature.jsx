import React from 'react';

function ListenerFeature(props) {
  window.google.maps.event.addListener(props.geojson, 'addfeature', function (event) {
    // var bp = getParameter('bp');
    // eslint-disable-next-line
    if (props.varLastBP == 0 && props.varTipoInvasao == props.siglaTipoInvasao) {
      var bp = props.varIdBem2
      // // console.log('BP:', bp)
      props.varhighlightBP(event.feature, bp);
      var f = event.feature;
      var trecho = f.getProperty('TRECHO');
      var ficha = f.getProperty('N_FICHA');
      var kminicial = f.getProperty('KM_INICIAL');
      var position = props.varGetPosition(f);

      props.varInfowindow.setContent(`<div>
                            <h5><b>Tipo da Ocupação: </b>${props.NomeTipo}</h5>
                            <b>Trecho: </b>${trecho}</br>
                            <b>Número da Ficha: </b>${ficha}
                            <br/><b>KM Inicial: </b>${kminicial}
                            </div>
                            <b float:right><a href="#/admin/bp/vp/f/visualiza/${ficha}" style="float:right">Ver Ficha</a></b></br>
                            `);
      props.varInfowindow.setPosition(position);
      props.varInfowindow.setOptions({
        pixelOffset: new window.google.maps.Size(0, -10)
      });
      props.varInfowindow.open(props.varMap);
    }
  });
  return
}

export default ListenerFeature
